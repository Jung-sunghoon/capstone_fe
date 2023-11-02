import axios from 'axios'
import { ProjectType, ProjectsType, UserType } from '@src/types'
import { useCallback, useEffect, useState } from 'react'
import { convertApplyStatus } from '@src/utils/common'
import { Button, List, Pagination } from 'antd'
import { sortOptionEnums } from '@src/enums/enums'
import Project from '@src/Components/Project'
import './profile.css'

export interface UserProps {
  userData: UserType
}

export interface ApplicationData {
  projectId: number
  userId: string
  status: string
}

const PROJECT_STATUSES = [
  { label: '진행 중', value: 'Ps_pr' },
  { label: '프로젝트 공유', value: 'Ps_co' },
]

const Profile: React.FC<UserProps> = () => {
  const [projects, setProjects] = useState<ProjectsType>([])
  const [sortOption, setSortOption] = useState<string>(sortOptionEnums.latest)
  const [filteredData, setFilteredData] = useState<ProjectsType>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const handlePageChange = (page: number) => setCurrentPage(page)
  const [pageSize] = useState<number>(12)
  const slicedData = filteredData?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )
  const [userProfile, setUserProfile] = useState<UserType | undefined>(
    undefined,
  )
  const [currentProjectStatus, setCurrentProjectStatus] =
    useState<string>('Ps_pr')
  const [userApplicationData, setUserApplicationData] = useState<
    ApplicationData[]
  >([])
  const userId = localStorage.userId
  const handleProjectStatusClick = (status: string) => {
    setCurrentProjectStatus(status)
  }

  const performSearchAndSort = useCallback(() => {
    let filtered = [...projects] // 원본 데이터를 보존하기 위해 복사

    if (currentProjectStatus) {
      filtered = filtered.filter(
        item => item.projectInfo.projectStatus === currentProjectStatus,
      )
    }

    const sortFunctions: any = {
      latest: (a: ProjectType, b: ProjectType) =>
        new Date(b.projectInfo.generateDate).getTime() -
        new Date(a.projectInfo.generateDate).getTime(),
      views: (a: ProjectType, b: ProjectType) =>
        b.projectInfo.views - a.projectInfo.views,
      likes: (a: ProjectType, b: ProjectType) =>
        b.projectInfo.likes - a.projectInfo.likes,
    }

    if (sortOption && sortFunctions[sortOption]) {
      filtered.sort(sortFunctions[sortOption])
    }

    setFilteredData(filtered)
  }, [projects, currentProjectStatus, sortOption])

  console.log(userApplicationData)

  useEffect(() => {
    const fetchBoardData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/api/projects_list`,
        )

        if (response.status === 200) {
          // 가져온 프로젝트 목록을 설정
          setProjects(response.data)
        } else {
          setProjects([])
        }
      } catch (error) {
        console.error('게시물 목록을 가져오는 중 오류 발생:', error)
      }
      // setProjects(mockProjects)
    }
    const profileData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_ENDPOINT
          }/api/user_information?userId=${userId}`,
        )
        if (response.status === 200) {
          setUserProfile(response.data)
          console.log('프로필 출력')
        } else {
        }
      } catch (error) {
        console.error('프로필 출력 오류', error)
      }
    }
    const applicationData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_ENDPOINT
          }/api/my_applications?userId=${userId}`,
        )
        if (response.status === 200) {
          setUserApplicationData(response.data)
          console.log('신청 리스트 출력')
        } else {
        }
      } catch (error) {
        console.error('신청 리스트 출력 오류', error)
      }
    }
    profileData(), applicationData(), fetchBoardData()
  }, [])

  useEffect(() => {
    performSearchAndSort()
  }, [projects, currentProjectStatus, sortOption])

  return (
    <div style={{ marginTop: '10px' }}>
      <div>
        <section>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginRight: '30px',
            }}
          >
            <img
              style={{ maxWidth: '15px', maxHeight: '15px' }}
              src="src/assets/favicon.png"
            />
            <div>포인트: {userProfile?.point}</div>
          </div>
        </section>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div>이름: {userProfile?.name}</div>
          <div>아이디: {userProfile?.userId}</div>
          <div>닉네임: {userProfile?.nickname}</div>
          <div>비밀번호: {userProfile?.password}</div>
          <div>이메일: {userProfile?.email}</div>
          <div>Git 주소: {userProfile?.gitAddress}</div>
        </section>
        <section style={{ marginLeft: '30px' }}>
          <div>신청한 프로젝트</div>
          <ul>
            {userApplicationData?.map(applydata => (
              <>
                <li key={applydata.projectId}>
                  projectId: {applydata?.projectId}
                </li>
                <li>status: {convertApplyStatus(applydata?.status)}</li>
              </>
            ))}
          </ul>
        </section>
      </div>
      <section style={{ marginRight: '30px', marginLeft: '30px' }}>
        <ul className="P__sort__menu">
          {PROJECT_STATUSES.map(status => (
            <li
              key={status.label}
              onClick={() => handleProjectStatusClick(status?.value)}
              className={currentProjectStatus === status.value ? 'active' : ''}
            >
              <Button
                type={
                  currentProjectStatus === status.value ? 'primary' : 'default'
                }
              >
                {status.label}
              </Button>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <div>
          <div style={{ marginLeft: '30px', marginTop: '10px' }}>
            내 프로젝트
          </div>
          <List
            style={{
              marginTop: '30px',
              marginLeft: '30px',
              marginRight: '30px',
            }}
            grid={{ gutter: 12, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 6 }}
            dataSource={slicedData} // 페이지네이션에 따라 잘라낸 데이터를 사용
            renderItem={(item: ProjectType) => (
              <List.Item>
                <Project projectData={item} />
              </List.Item>
            )}
          />
        </div>
        <Pagination
          className="Board__page"
          current={currentPage}
          total={filteredData?.length}
          pageSize={pageSize}
          showSizeChanger={false} // 페이지 크기 변경 옵션 숨김
          onChange={handlePageChange}
        />
      </section>
    </div>
  )
}

export default Profile
