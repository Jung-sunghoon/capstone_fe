import { useState, useEffect } from 'react'
import { ProjectType } from '@src/types'
import axios from 'axios'
import { Input, Tag } from 'antd'
import { EyeFilled, LikeFilled } from '@ant-design/icons'
import './ProjectDetails.css'
import { convertStatus, convertprojectStatus } from '@src/utils/common'

export interface ProjectDetails {}

const ProjectDetails: React.FC<ProjectDetails> = () => {
  const [project, setProject] = useState<ProjectType | undefined>(undefined)
  const currentURL = window.location.href
  const segments = currentURL.split('/')
  const projectId = segments[segments.length - 1]

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
              {project?.projectInfo.generateDate}
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
                  {project?.techNames.map((name: string, index: number) => {
                    return (
                      <Tag key={'tag_' + name + index} color="magenta">
                        {name}
                      </Tag>
                    )
                  })}
                </span>
              </li>
            </ul>
          </section>
        </section>
        <div className="projectDetails__descriptionAll">
          <h2 className="projectDetails__descriptionInfo">프로젝트 소개</h2>
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
              {project?.projectInfo.userId}
              <textarea
                className="projectDetails__commentText"
                placeholder="댓글을 입력하세요."
              ></textarea>
            </div>
            <div className="projectDetails__commentBtnWrapper">
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
