import { useState, useEffect } from 'react'
import { ProjectType } from '@src/types'
import { Button, Tag } from 'antd'
import {
  DeleteOutlined,
  EditOutlined,
  EyeFilled,
  LikeFilled,
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
import { time } from 'console'

export interface ProjectDetails {}

const ProjectDetails: React.FC<ProjectDetails> = () => {
  const [project, setProject] = useState<ProjectType | undefined>(undefined)
  const currentURL = window.location.href
  const segments = currentURL.split('/')
  const projectId = segments[segments.length - 1]
  const navigate = useNavigate()
  const techstacks = localStorage.getItem('techstacks')

  const handleEditProject = async () => {
    navigate(`/edit/${projectId}`)
  }

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
        // 프로젝트 삭제 성공 시 다른 처리 (예: 리다이렉트 등)
        console.log('프로젝트 삭제 성공')
        navigate('/projects')
      } catch (error) {
        // 오류 처리
        console.error('프로젝트 삭제 오류:', error)
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Axios를 사용하여 서버에서 프로젝트 목록 가져오기
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

  const renderEditAndDeleteButtons = () => {
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

  console.log('project', project?.techId)

  return (
    <div id="root">
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
                          <Tag key={'tag_' + name + index} color="magenta">
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
            {renderEditAndDeleteButtons()}
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
              <button className="projectDetails__commentBtn" name="register">
                댓글 등록
              </button>
            </div>
          </div>
          <ul className="projectDetails__commentList"></ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
