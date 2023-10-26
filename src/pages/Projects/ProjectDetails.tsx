import { useState, useEffect } from 'react'
import { ProjectType } from '@src/types'
import { Button, List, Tag, message } from 'antd'
import {
  DeleteOutlined,
  EditOutlined,
  EyeFilled,
  LikeFilled,
  UnorderedListOutlined,
  UserAddOutlined,
} from '@ant-design/icons'
import './ProjectDetails.css'
import {
  convertStatus,
  convertprojectStatus,
  formatDate,
} from '@src/utils/common'
// import { mockProjects } from './mock/mockProjects'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export interface ProjectDetails {}

export interface CommentType {
  commentId: number
  userId: string
  content: string
  createdAt: string
}

const ProjectDetails: React.FC<ProjectDetails> = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const [project, setProject] = useState<ProjectType | undefined>(undefined)
  const currentURL = window.location.href
  const segments = currentURL.split('/')
  const projectId = segments[segments.length - 1]
  const navigate = useNavigate()
  const techstacks = localStorage.getItem('techstacks')
  const [commentText, setCommentText] = useState('')
  const [comments, setComments] = useState<CommentType[]>([])
  const [applyBtn, setApplyBtn] = useState<boolean>(false)
  // const [showList, setShowList] = useState(false)
  // const [listData, setListData] = useState<string[]>([])
  const projectGenerationUserId = project?.projectInfo?.userId
  const userId = localStorage.userId

  //프로젝트 수정
  const handleEditProject = async () => {
    navigate(`/edit/${projectId}`)
  }

  //프로젝트 삭제
  const handleDeleteProject = async () => {
    const confirmDelete = window.confirm('프로젝트를 삭제하시겠습니까?')
    if (confirmDelete) {
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

  //초기 렌더링 시 프로젝트 정보 가져오기
  useEffect(() => {
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

    // 초기 렌더링 시 데이터 가져오기
    fetchData()
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
        messageApi.success('프로젝트 신청 성공')
        setApplyBtn(true)
      } else {
        console.log('프로젝트 신청 실패')
        setApplyBtn(false)
      }
    } catch (error) {
      // 오류 처리
      messageApi.error('프로젝트 신청 오류:')
      setApplyBtn(false)
    }
  }

  //프로젝트 신청자 목록 확인 함수
  // const handleShowList = async () => {
  //   if (!showList) {
  //     try {
  //       const response = await axios.get(
  //         `${
  //           import.meta.env.VITE_API_ENDPOINT
  //         }/api/apply_list?projectId=${projectId}`,
  //       )
  //       if (response.status === 201) {
  //         console.log('신청 리스트 보기 성공')
  //       } else {
  //         console.log('신청 리스트 보기 실패')
  //       }
  //     } catch (error) {
  //       // 오류 처리
  //       messageApi.error('신청 리스트 보기 오류:')
  //     }
  //   }
  // }

  //프로젝트 신청 버튼( 게시물 작성자는 목록보기 )
  const renderProjectApplyBtn = () => {
    if (project?.projectInfo.userId === localStorage.userId) {
      // return (
      //   <div>
      //     <Button
      //       className="projectDetails__projectApplyListBtn"
      //       onClick={handleShowList}
      //     >
      //       <UnorderedListOutlined />
      //     </Button>
      //     {showList && (
      //       <List
      //         dataSource={listData}
      //         renderItem={item => <List.Item>{item}</List.Item>}
      //       />
      //     )}
      //   </div>
      // )
    } else {
      if (applyBtn) {
        //신청 시 신청 버튼 비활성화(상태 저장해야할 듯?)
        return (
          <Button
            className="projectDetails__projectApplybtn"
            onClick={handleApplyproject}
            disabled
          >
            <UserAddOutlined />
          </Button>
        )
      } else if (project?.projectInfo.status === 'S_pr' && !applyBtn) {
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
    if (project && localStorage.userId === project.projectInfo.userId) {
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

  //댓글 삭제 함수
  const handleDeleteComment = async () => {
    const confirmDelete = window.confirm('댓글을 삭제하시겠습니까?')
    if (confirmDelete) {
      try {
        // Axios를 사용하여 서버에 DELETE 요청을 보내 프로젝트 삭제
        await axios.delete(
          `${
            import.meta.env.VITE_API_ENDPOINT
          }/api/comments_delete/${projectId}?projectGenerationUserId=${projectGenerationUserId}&userId=${userId}`,
        )
        console.log('댓글 삭제 성공')
        setCommentText('')
      } catch (error) {
        // 오류 처리
        console.error('댓글 삭제 오류:', error)
      }
    }
  }

  //댓글 수정 함수

  //댓글 수정 및 삭제 버튼
  const renderCommentEditAndDeleteButtons = (commentUserId: string) => {
    if (localStorage.userId === commentUserId) {
      return (
        <div>
          {/* <Button
            className="projectDetails__commentEditBtn"
            onClick={handleEditComment}
          >
            <EditOutlined />
          </Button> */}
          <Button
            onClick={handleDeleteComment}
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
    axios
      .get(
        `${import.meta.env.VITE_API_ENDPOINT}/api/comments_list/${projectId}`,
      )
      .then(response => {
        if (response.status === 200) {
          setComments(response.data)
        }
      })
      .catch(error => {
        console.error('댓글 가져오기 오류:', error)
      })
  }, [commentText, projectId])

  return (
    <div id="root">
      {contextHolder}
      <div className="projectDetails__wraaper">
        <section className="projectDetails__header">
          <div className="projectDetails__title">
            {project?.projectInfo.projectTitle}
          </div>
          <div className="projectDetails__userAndDate">
            <div className="projectDetails__user">
              {project?.projectInfo.userId}
            </div>
            <div className="projectDetails__separater"></div>
            <div className="projectDetails__date">
              {project?.projectInfo.generateDate
                ? formatDate(new Date(project?.projectInfo.generateDate))
                : ''}
            </div>
          </div>
          <section className="projectDetails__projectAllInfo">
            <ul className="projectInfo__grid">
              <li className="projectDetails__projectInfo">
                <span className="projectInfo__title">진행 상태</span>
                <span className="projectInfo__content">
                  {convertprojectStatus(project?.projectInfo.projectStatus)}
                </span>
              </li>
              <li className="projectDetails__projectInfo">
                <span className="projectInfo__title">모집 상태</span>
                <span className="projectInfo__content">
                  {convertStatus(project?.projectInfo.status)}
                </span>
                <span>{renderProjectApplyBtn()}</span>
              </li>
              <li className="projectDetails__projectInfo">
                <span className="projectInfo__title">모집 인원</span>
                <span className="projectInfo__content">
                  {project?.projectInfo.recruitmentCount}명
                </span>
              </li>
              <li className="projectDetails__projectInfo">
                <span className="projectInfo__title">기술 스택</span>
                <span className="projectInfo__content">
                  {techstacks &&
                    JSON.parse(techstacks)
                      ?.filter((item: any) =>
                        project?.techId.includes(item.techId),
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
                __html: project?.projectInfo.description,
              }}
            />
          </div>
        </div>
        <section className="projectDetails__viewsAndLikes">
          <div className="projectDetails__views">
            <span>
              <EyeFilled />
            </span>
            <span>{project?.projectInfo.views}</span>
          </div>
          <div className="projectDetails__likes">
            <span>
              <LikeFilled />
            </span>
            <span>{project?.projectInfo.likes}</span>
          </div>
        </section>
        <div className="projectDetails__comments">
          <div className="projectDetails__commentInput">
            <div className="projectDetails__comment">
              댓글
              <span className="projectDetails__commentCount"></span>
            </div>
            <div className="projectDetails__commentContainer">
              {localStorage.userId}
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
            {comments.map(comment => (
              <li className="commentItem__container" key={comment?.commentId}>
                <section className="commentList__header">
                  <div className="commentList__wrapper">
                    <div className="commentList__userInfo">
                      <div className="commentList__userId">
                        {comment?.userId}
                      </div>
                      <div className="commentList__generateDate">
                        {comment?.createdAt
                          ? formatDate(new Date(comment?.createdAt))
                          : ''}
                      </div>
                    </div>
                  </div>
                  {renderCommentEditAndDeleteButtons(comment?.userId)}
                </section>
                <section className="commentList__content">
                  <p className="commentList__content">{comment?.content}</p>
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
