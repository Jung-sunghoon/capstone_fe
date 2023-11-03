import axios from 'axios'
import { ProjectType, ProjectsType, UserType } from '@src/types'
import { FormEvent, useCallback, useEffect, useState } from 'react'
import { convertApplyStatus, convertStatus } from '@src/utils/common'
import { Button, Input, List, Pagination, Space, Table, Tag } from 'antd'
import { sortOptionEnums } from '@src/enums/enums'
import Project from '@src/Components/Project'
import './profile.css'

export interface UserProps {
  userData: UserType
}

export interface ApplicationData {
  projectId: number
  status: string
  applyDate: string
  projectTitle: string
}

const PROJECT_STATUSES = [
  { label: '진행 중', value: 'Ps_pr' },
  { label: '프로젝트 공유', value: 'Ps_co' },
]

const columns = [
  { title: 'ProjectTitle', dataIndex: 'projectTitle', key: 'projectTitle' },
  { title: 'ProjectId', dataIndex: 'projectId', key: 'projectId' },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string | undefined) => convertStatus(status),
  },
  {
    title: 'Applystatus',
    dataIndex: 'applystatus',
    key: 'applystatus',
    render: (status: string | undefined) => convertApplyStatus(status),
  },
  {
    title: 'recruitmentCount',
    dataIndex: 'recruitmentCount',
    key: 'recruitmentCount',
  },
  { title: 'Action', dataIndex: 'Action', key: 'Action' },
]

const Profile: React.FC<UserProps> = () => {
  const [message, setMessage] = useState<string>('')
  const [projects, setProjects] = useState<ProjectsType>([])
  const [sortOption, setSortOption] = useState<string>(sortOptionEnums.latest)
  const [filteredData, setFilteredData] = useState<ProjectsType>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const handlePageChange = (page: number) => setCurrentPage(page)
  const [pageSize] = useState<number>(3)
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

  const renderProfileEditBtn = () => {
    if (userId === userProfile?.userId) {
      return (
        <div>
          <Button
            type="primary"
            htmlType="submit"
            className="Pro__ProfileEditBtn"
          >
            수정
          </Button>
        </div>
      )
    }
    return null
  }

  const performSearchAndSort = useCallback(() => {
    let filtered = [...projects] // 원본 데이터를 보존하기 위해 복사

    if (currentProjectStatus) {
      filtered = filtered.filter(
        item => item?.projectStatus === currentProjectStatus,
      )
    }

    const sortFunctions: any = {
      latest: (a: ProjectType, b: ProjectType) =>
        new Date(b?.generateDate).getTime() -
        new Date(a?.generateDate).getTime(),
      views: (a: ProjectType, b: ProjectType) => b?.views - a?.views,
      likes: (a: ProjectType, b: ProjectType) => b?.likes - a?.likes,
    }

    if (sortOption && sortFunctions[sortOption]) {
      filtered.sort(sortFunctions[sortOption])
    }

    setFilteredData(filtered)
  }, [projects, currentProjectStatus, sortOption])

  useEffect(() => {
    const fetchBoardData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/api/projects/${userId}`,
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
        if (response.status === 200 || response.status === 400) {
          const applications: ApplicationData[] = response.data.reverse()
          console.log('신청 리스트 출력')

          const projectIds: number[] = applications.map(app => app.projectId)

          const detailedDataPromises = projectIds.map(projectId => {
            return axios.post<ProjectType>(
              `${
                import.meta.env.VITE_API_ENDPOINT
              }/api/single_information_project?projectId=${projectId}`,
            )
          })

          const detailedDataResponses = await Promise.all(detailedDataPromises)

          const detailedData: ProjectType[] = detailedDataResponses.map(
            response => response.data,
          )

          const mergedData: any = detailedData.map((project: any) => {
            // 프로젝트의 projectId에 일치하는 지원서들을 찾습니다.
            let projectApplications = applications.filter(
              app => app.projectId === project.projectId,
            )

            // 찾은 지원서들을 기존 프로젝트 객체에 추가합니다.
            // @ts-ignore
            project.applystatus = projectApplications[0].status

            return project
          })
          console.log('mergedData', mergedData)

          setUserApplicationData(mergedData)
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      !userProfile?.userId ||
      !userProfile?.password ||
      !userProfile?.name ||
      !userProfile?.nickname ||
      !userProfile?.email ||
      !userProfile?.gitAddress
    ) {
      setMessage('모든 회원 정보를 입력하세요.')
      return // 필요한 정보가 입력되지 않았을 경우 회원가입 중단
    }
  }
  return (
    <div style={{ marginTop: '10px' }}>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="Pro__NicknameAndPointContainer">
            <section className="Pro__PointAndGrade">
              <div className="Pro__Point">
                <img
                  style={{ maxWidth: '17px', maxHeight: '17px' }}
                  src="src/assets/favicon.png"
                />
                <div>포인트: {userProfile?.point}</div>
              </div>
              <div className="Pro__Grade">
                <div>등급: </div>
              </div>
            </section>
          </div>
          <section className="Pro__UserProfileContainer">
            <div className="Pro__UserProfile_div">
              <label>닉네임</label>
              <Input
                className="Pro__UserProfile"
                value={userProfile?.nickname}
                disabled
                style={{ backgroundColor: 'white', color: 'black' }}
              />
            </div>
            <div className="Pro__form_div">
              <label>이름</label>
              <Input
                className="Pro__UserProfile"
                value={userProfile?.name}
                disabled
                style={{ backgroundColor: 'white', color: 'black' }}
              />
            </div>
            <div className="Pro__form_div">
              <label>아이디</label>
              <Input
                className="Pro__UserProfile"
                value={userProfile?.userId}
                disabled
                style={{ backgroundColor: 'white', color: 'black' }}
              />
            </div>
            <div className="Pro__form_div">
              <label>비밀번호</label>
              <Input
                className="Pro__UserProfile"
                value={userProfile?.password}
                disabled
                style={{ backgroundColor: 'white', color: 'black' }}
              />
            </div>
            <div className="Pro__form_div">
              <label>이메일</label>
              <Input
                className="Pro__UserProfile"
                value={userProfile?.email}
                disabled
                style={{ backgroundColor: 'white', color: 'black' }}
              />
            </div>
            <div className="Pro__form_div">
              <label>Git 주소</label>
              <Input
                className="Pro__UserProfile"
                value={userProfile?.gitAddress}
                disabled
                // style={{ backgroundColor: 'white', color: 'black' }}
              />
            </div>
            <p className="error__m">{message}</p>
            {renderProfileEditBtn()}
          </section>
        </form>
      </div>
      <div className="" style={{ marginLeft: '30px', marginTop: '10px' }}>
        내 프로젝트
      </div>
      <div>
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
      </div>
      <section>
        <div>
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
        <div
          style={{
            paddingLeft: '30px',
          }}
        >
          <Pagination
            className="Board__page"
            current={currentPage}
            total={filteredData?.length}
            pageSize={pageSize}
            showSizeChanger={false} // 페이지 크기 변경 옵션 숨김
            onChange={handlePageChange}
          />
        </div>
      </section>
      <section style={{ marginLeft: '30px', marginTop: '30px' }}>
        <Table<ApplicationData>
          dataSource={userApplicationData}
          columns={columns}
          pagination={{
            position: ['bottomCenter'],
          }}
        ></Table>
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
  )
}

export default Profile
