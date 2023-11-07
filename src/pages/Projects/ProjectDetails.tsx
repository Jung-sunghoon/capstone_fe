import { useState, useEffect, SetStateAction } from 'react'
import { CommentType, ProjectType } from '@src/types'
import { Button, Modal, Table, Tag, message } from 'antd'
import {
  DeleteOutlined,
  EditOutlined,
  EyeFilled,
  LikeFilled,
  SaveOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
} from '@ant-design/icons'
import './ProjectDetails.css'
import {
  convertApplyStatus,
  convertStatus,
  convertprojectStatus,
  formatDate,
} from '@src/utils/common'
// import { mockProjects } from './mock/mockProjects'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export interface ProjectDetails {}

export interface ApplyData {
  userId: string
  applyDate: string
  projectId: number
  status: string
}

const ProjectDetails: React.FC<ProjectDetails> = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const [content, setContent] = useState('')
  const [updateContentId, setUpdateContentId] = useState(0)
  const [project, setProject] = useState<ProjectType | undefined>(undefined)
  const currentURL = window.location.href
  const segments = currentURL.split('/')
  const projectId = segments[segments.length - 1]
  const navigate = useNavigate()
  const techstacks = localStorage.getItem('techstacks')
  const [commentText, setCommentText] = useState('')
  const [comments, setComments] = useState<CommentType[]>([])
  const [applylist, setApplylist] = useState<ApplyData[] | undefined>([])
  const projectGenerationUserId = project?.userId
  const userId = localStorage.userId
  const [open, setOpen] = useState(false)

  //프로젝트 수정
  const handleEditProject = async () => {
    navigate(`/edit/${projectId}`)
  }

  //프로젝트 삭제
  const handleDeleteProject = async () => {
    const confirmDelete = window.confirm('프로젝트를 삭제하시겠습니까?')
    if (confirmDelete && projectGenerationUserId === userId) {
      try {
        // Axios를 사용하여 서버에 DELETE 요청을 보내 프로젝트 삭제
        await axios.delete(
          `${
            import.meta.env.VITE_API_ENDPOINT
          }/api/delete_project?projectId=${projectId}`,
        )
        console.log('프로젝트 삭제 성공')
        navigate('/projects')
      } catch (error) {
        // 오류 처리
        console.error('프로젝트 삭제 오류:', error)
      }
    }
  }

  const fetchApplylist = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_ENDPOINT
        }/api/apply_list?projectId=${projectId}`,
      )
      if (response.status === 200 || response.data === 400) {
        const applylistData: ApplyData[] = response.data
        setApplylist(applylistData)

        const userIds = applylistData.map(
          (item: { userId: string }) => item.userId,
        )

        const userInfoPromises = userIds.map(async (userId: string) => {
          try {
            const userInfoResponse = await axios.get(
              `${
                import.meta.env.VITE_API_ENDPOINT
              }/api/user_information?userId=${userId}`,
            )
            return userInfoResponse.data
          } catch (userInfoError) {
            console.error('Error fetching user information:', userInfoError)
            return null
          }
        })

        const userInformation = await Promise.all(userInfoPromises)

        const mergedData: any = userInformation.map((apply: any) => {
          // 프로젝트의 projectId에 일치하는 지원서들을 찾습니다.
          let projectUserInformationList = applylistData.filter(
            app => app.userId === apply.userId,
          )

          // 찾은 지원서들을 기존 프로젝트 객체에 추가합니다.
          // @ts-ignore
          apply.status = projectUserInformationList[0].status
          apply.applyDate = projectUserInformationList[0].applyDate
          apply.projectId = projectUserInformationList[0].projectId

          return apply
        })

        console.log('userInformation', userInformation)
        console.log('applylistData', applylistData)

        console.log('mergedData', mergedData)

        setApplylist(mergedData)
      } else {
        setApplylist(undefined)
      }
    } catch (error) {
      // 오류 처리
      console.error('Error fetching project list:', error)
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_API_ENDPOINT
        }/api/single_information_project?projectId=${projectId}`,
        { projectId },
      )
      if (response.status === 200) {
        // 가져온 프로젝트 목록을 설정
        setProject(response.data)
      } else {
        setProject(undefined)
      }
    } catch (error) {
      // 오류 처리
      console.error('Error fetching project list:', error)
    }
  }

  //초기 렌더링 시 프로젝트 정보 가져오기
  useEffect(() => {
    // 초기 렌더링 시 데이터 가져오기
    fetchData()
    fetchApplylist()
  }, []) // 빈 배열을 두 번째 인수로 전달하면 useEffect가 초기 렌더링 시 한 번만 실행됩니다.

  //댓글 텍스트 상태 업데이트
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value)
  }

  //댓글 생성 함수
  const handleGenerateComment = async () => {
    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_API_ENDPOINT
        }/api/comments/generate?projectGenerationUserId=${projectGenerationUserId}&userId=${userId}`,
        {
          projectId: projectId,
          userId: userId,
          content: commentText,
          commentToUpdateId: 0,
        },
      )
      if (response.status === 200) {
        console.log('댓글 등록 성공')
        setCommentText('')
      } else {
        console.log('댓글 등록 실패')
      }
    } catch (error) {
      // 오류 처리
      messageApi.error('댓글 등록 오류:')
    }
  }

  //프로젝트 신청 함수
  const handleApplyproject = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/apply`,
        {
          userId: userId,
          projectId: projectId,
        },
      )
      if (response.status === 201) {
        console.log('프로젝트 신청 성공')
        fetchApplylist()
        messageApi.success('프로젝트 신청 성공')
      } else {
        console.log('프로젝트 신청 실패')
      }
    } catch (error) {
      // 오류 처리
      messageApi.error('프로젝트 신청 오류:')
    }
  }
  //프로젝트 신청 버튼( 게시물 작성자는 목록보기 )

  const columns = [
    { title: 'userId', dataIndex: 'userId', key: 'userId' },
    {
      title: 'studentNumber',
      dataIndex: 'studentNumber',
      key: 'studentNumber',
    },
    { title: 'department', dataIndex: 'department', key: 'department' },
    { title: 'gitAddress', dataIndex: 'gitAddress', key: 'gitAddress' },
    {
      title: 'applyStatus',
      dataIndex: 'status',
      key: 'status',
      render: (status: string | undefined) => {
        let color = 'green'

        if (status === 'PENDING') {
          color = 'blue'
        } else if (status === 'REJECTED') {
          color = 'red'
        }
        return (
          <div>
            <Tag color={color}>{convertApplyStatus(status)}</Tag>
          </div>
        )
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_text: any, record: any) => (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Tag
            style={{ cursor: 'pointer' }}
            color="green"
            onClick={() => handleAccepted(record)}
          >
            승인
          </Tag>
          <Tag
            style={{ cursor: 'pointer' }}
            color="red"
            onClick={() => handleRejected(record)}
          >
            거절
          </Tag>
        </div>
      ),
      width: '100px',
    },
    {
      title: 'View Detatils',
      dataIndex: 'view_Detatils',
      key: 'view_Detatils',
    },
  ]

  const handleAccepted = async (projectApplyData: ApplyData) => {
    const confirmDelete = window.confirm('신청을 승인 하시겠습니까?')
    if (confirmDelete) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}/api/accpet`,
          {
            userId: projectApplyData.userId,
            projectId: projectApplyData.projectId,
            status: projectApplyData.status,
            passDate: '',
          },
        )
        if (response.status === 200) {
          const filteredApplylist = applylist?.filter(apply => {
            return apply.projectId !== projectApplyData.projectId
          })
          setApplylist(filteredApplylist)
        } else {
        }
      } catch (error) {
        // 오류 처리
        console.log('projectApplyData.status', projectApplyData.status)
        console.log('projectApplyData.userId', projectApplyData.userId)
        console.log('projectApplyData.projectId', projectApplyData.projectId)
        console.log('projectApplyData', projectApplyData)

        console.error('Error fetching project list:', error)
      }
    }
  }

  const handleRejected = async (projectApplyData: ApplyData) => {
    const confirmDelete = window.confirm('신청을 거절 하시겠습니까?')
    if (confirmDelete) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}/api/rejected`,
          {
            userId: projectApplyData.userId,
            projectId: projectApplyData.projectId,
            status: projectApplyData.status,
          },
        )
        if (response.status === 200) {
          const filteredApplylist = applylist?.filter(apply => {
            return apply.projectId !== projectApplyData.projectId
          })
          setApplylist(filteredApplylist)
        } else {
        }
      } catch (error) {
        // 오류 처리
        console.error('Error fetching project list:', error)
      }
    }
  }

  const renderProjectApplyBtn = () => {
    if (project?.userId === localStorage.userId) {
      return (
        <div>
          <Button
            className="projectDetails__projectApplyListBtn"
            onClick={() => setOpen(true)}
          >
            <UnorderedListOutlined />
          </Button>
          <Modal
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1500}
          >
            <Table<ApplyData>
              dataSource={applylist}
              columns={columns}
              pagination={{
                position: ['bottomCenter'],
              }}
            ></Table>
          </Modal>
        </div>
      )
    } else {
      if (
        applylist &&
        applylist?.filter((list: any) => list?.userId === localStorage.userId)
          .length > 0
      ) {
        return (
          <Button
            className="projectDetails__projectApplybtn"
            onClick={handleApplyproject}
            disabled
          >
            <UserAddOutlined />
          </Button>
        )
      } else if (project?.status === 'S_pr') {
        return (
          <Button
            className="projectDetails__projectApplybtn"
            onClick={handleApplyproject}
          >
            <UserAddOutlined />
          </Button>
        )
      }
    }

    return null
  }

  //프로젝트 수정 및 삭제 버튼(로컬스토리지 userId와 게시물의 userId가 같을 때)
  const renderProjectEditAndDeleteButtons = () => {
    if (project && localStorage.userId === project?.userId) {
      return (
        <div>
          <Button
            className="projectDetails__projectEditBtn"
            onClick={handleEditProject}
          >
            <EditOutlined />
          </Button>
          <Button
            onClick={handleDeleteProject}
            className="projectDetails__projectDeleteBtn"
          >
            <DeleteOutlined />
          </Button>
        </div>
      )
    }
    return null
  }

  //댓글 수정
  const handleEditComment = async (commentId: number, content: string) => {
    const confirmDelete = window.confirm('댓글을 수정 하시겠습니까?')
    if (confirmDelete) {
      try {
        // Axios를 사용하여 서버에 DELETE 요청을 보내 프로젝트 삭제
        await axios.put(
          `${import.meta.env.VITE_API_ENDPOINT}/api/comments_edit/${commentId}`,
          {
            commentId: commentId,
            projectId: projectId,
            userId: userId,
            content: content,
            createdAt: new Date().toLocaleDateString(),
          },
        )
        console.log('댓글 삭제 성공', commentId)

        // comment reload
        fetchComments()
        setUpdateContentId(0)
        setContent('')
      } catch (error) {
        // 오류 처리
        console.error('댓글 삭제 오류:', error)
      }
    }
  }

  //댓글 삭제 함수
  const handleDeleteComment = async (commentId: number) => {
    const confirmDelete = window.confirm('댓글을 삭제 하시겠습니까?')
    if (confirmDelete) {
      try {
        // Axios를 사용하여 서버에 DELETE 요청을 보내 프로젝트 삭제
        await axios.delete(
          `${
            import.meta.env.VITE_API_ENDPOINT
          }/api/comments_delete/${commentId}?projectGenerationUserId=${projectGenerationUserId}&userId=${userId}`,
        )
        console.log('댓글 삭제 성공', commentId)

        // comment reload
        fetchComments()
      } catch (error) {
        // 오류 처리
        console.error('댓글 삭제 오류:', error)
      }
    }
  }

  //댓글 수정 함수

  //댓글 수정 및 삭제 버튼
  const renderCommentEditAndDeleteButtons = (
    commentUserId: string,
    commentId: number,
    content?: any,
  ) => {
    if (localStorage.userId === commentUserId) {
      return (
        <div>
          <Button
            className="projectDetails__commentEditBtn"
            onClick={() => {
              if (updateContentId === commentId) {
                setUpdateContentId(0)
              } else {
                setUpdateContentId(commentId)
                setContent(content)
              }
            }}
          >
            <EditOutlined />
          </Button>
          <Button
            onClick={() => {
              handleDeleteComment(commentId)
            }}
            className="projectDetails__commentDeleteBtn"
          >
            <DeleteOutlined />
          </Button>
        </div>
      )
    }
    return null
  }

  //댓글 목록 가져오기
  useEffect(() => {
    fetchComments()
  }, [commentText, projectId])

  const fetchComments = () => {
    axios
      .get(
        `${import.meta.env.VITE_API_ENDPOINT}/api/comments_list/${projectId}`,
      )
      .then(response => {
        if (response.status === 200) {
          console.log('response.data', response.data)
          setComments(response.data.reverse())
        } else if (response.status === 204) {
          setComments(response.data.reverse())
        }
      })
      .catch(error => {
        console.error('댓글 가져오기 오류:', error)
      })
  }

  return (
    <div id="root">
      {contextHolder}
      <div className="projectDetails__wraaper">
        <section className="projectDetails__header">
          <div className="projectDetails__title">{project?.projectTitle}</div>
          <div className="projectDetails__userAndDate">
            <div className="projectDetails__user">{project?.userId}</div>
            <div className="projectDetails__separater"></div>
            <div className="projectDetails__date">
              {project?.generateDate
                ? formatDate(new Date(project?.generateDate))
                : ''}
            </div>
          </div>
          <section className="projectDetails__projectAllInfo">
            <ul className="projectInfo__grid">
              <li className="projectDetails__projectInfo">
                <span className="projectInfo__title">진행 상태</span>
                <span className="projectInfo__content">
                  {convertprojectStatus(project?.projectStatus)}
                </span>
              </li>
              <li className="projectDetails__projectInfo">
                <span className="projectInfo__title">모집 상태</span>
                <span className="projectInfo__content">
                  {convertStatus(project?.status)}
                </span>
                <span>{renderProjectApplyBtn()}</span>
              </li>
              <li className="projectDetails__projectInfo">
                <span className="projectInfo__title">모집 인원</span>
                <span className="projectInfo__content">
                  {project?.recruitmentCount}명
                </span>
              </li>
              <li className="projectDetails__projectInfo">
                <span className="projectInfo__title">기술 스택</span>
                <span className="projectInfo__content">
                  {techstacks &&
                    JSON.parse(techstacks)
                      ?.filter((item: any) =>
                        project?.techIds?.includes(item.techId),
                      )
                      .map((tech: any, index: number) => {
                        return (
                          <Tag key={'tag_' + index} color="magenta">
                            {tech?.techName}
                          </Tag>
                        )
                      })}
                </span>
              </li>
            </ul>
          </section>
        </section>
        <div className="projectDetails__descriptionAll">
          <div className="projectDetails__descriptionInfoWrapper">
            <h2 className="projectDetails__descriptionInfo">프로젝트 소개</h2>
            {renderProjectEditAndDeleteButtons()}
          </div>
          <div className="projectDetails__descriptionPost">
            <div
              dangerouslySetInnerHTML={{
                __html: project?.description,
              }}
            />
          </div>
        </div>
        <section className="projectDetails__viewsAndLikes">
          <div className="projectDetails__views">
            <span>
              <EyeFilled />
            </span>
            <span>{project?.views}</span>
          </div>
          <div className="projectDetails__likes">
            <span>
              <LikeFilled />
            </span>
            <span>{project?.likes}</span>
          </div>
        </section>
        <div className="projectDetails__comments">
          <div className="projectDetails__commentInput">
            <div className="projectDetails__comment">
              댓글
              <span className="projectDetails__commentCount"></span>
            </div>
            <div className="projectDetails__commentContainer">
              <textarea
                className="projectDetails__commentText"
                placeholder="댓글을 입력하세요."
                value={commentText}
                onChange={handleCommentChange}
              ></textarea>
            </div>
            <div className="projectDetails__commentBtnWrapper">
              <Link to="/projects">
                <button
                  className="projectDetails__commentBtn"
                  style={{
                    marginRight: '5px',
                  }}
                  name="register"
                >
                  뒤로 가기
                </button>
              </Link>
              <button
                onClick={handleGenerateComment}
                className="projectDetails__commentBtn"
                name="register"
              >
                댓글 등록
              </button>
            </div>
          </div>
          <ul className="projectDetails__commentList">
            {comments &&
              comments?.map(comment => (
                <li className="commentItem__container" key={comment?.commentId}>
                  <section className="commentList__header">
                    <div className="commentList__wrapper">
                      <div className="commentList__userInfo">
                        <div className="commentList__userId">
                          {comment?.userId}
                        </div>
                        <div className="commentList__generateDate">
                          {comment?.createdAt}
                          {/* ? formatDate(new Date(comment?.createdAt))
                          : ''} */}
                        </div>
                      </div>
                    </div>
                    {renderCommentEditAndDeleteButtons(
                      comment?.userId,
                      comment?.commentId,
                      comment?.content,
                    )}
                  </section>
                  <section className="commentList__content">
                    <p className="commentList__content">
                      {updateContentId === 0 ? (
                        comment?.content
                      ) : updateContentId === comment?.commentId ? (
                        <div className="commentList__update_content">
                          <input
                            type="text"
                            style={{ width: '100%' }}
                            value={content}
                            onChange={(e: any) => {
                              setContent(e.target.value)
                            }}
                          />
                          <div>
                            <Button
                              className="projectDetails__commentSaveBtn"
                              onClick={() => {
                                handleEditComment(comment?.commentId, content)
                              }}
                            >
                              <SaveOutlined />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        comment?.content
                      )}
                    </p>
                  </section>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
