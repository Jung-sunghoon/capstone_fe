import axios from 'axios'
import { ProjectType, ProjectsType, UserType } from '@src/types'
import { FormEvent, useCallback, useEffect, useState } from 'react'
import { convertApplyStatus, convertStatus } from '@src/utils/common'
import { Button, Input, List, Menu, Pagination, Table, Tag } from 'antd'
import { sortOptionEnums } from '@src/enums/enums'
import Project from '@src/Components/Project'
import './profile.css'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

const techstacks = localStorage.getItem('techstacks')

export interface UserProps {
  userData?: UserType
}

export interface ApplicationData {
  userId: string
  projectId: number
  status: string
  applyDate: string
  projectTitle: string
}

const PROJECT_STATUSES = [
  { label: '진행 중', value: 'Ps_pr' },
  { label: '프로젝트 공유', value: 'Ps_co' },
]

const Profile: React.FC<UserProps> = ({}) => {
  const currentURL = window.location.href
  const segments = currentURL.split('/')
  const targetUserId = segments[segments.length - 1]

  const columns = [
    {
      title: 'ProjectTitle',
      dataIndex: 'projectTitle',
      key: 'projectTitle',
      width: '200px',
    },
    {
      title: 'TechIds',
      dataIndex: 'techIds',
      key: 'techIds',
      render: (techIds: number[] | undefined) => {
        const techStacksData = techstacks ? JSON.parse(techstacks) : []
        return (
          <div>
            {techIds &&
              techIds.map((techId, index) => {
                const tech = techStacksData?.find(
                  (item: any) => item.techId === techId,
                )
                return (
                  <Tag key={'tag_' + index} color="magenta">
                    {tech?.techName}
                  </Tag>
                )
              })}
          </div>
        )
      },
    },
    {
      title: 'Applystatus',
      dataIndex: 'applystatus',
      key: 'applystatus',
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
      title: 'recruitmentCount',
      dataIndex: 'recruitmentCount',
      key: 'recruitmentCount',
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
      render: (_text: any, record: any) => (
        <Tag
          style={{ cursor: 'pointer' }}
          color="red"
          onClick={() => handleCancelApply(record)}
        >
          취소
        </Tag>
      ),
    },
  ]

  const handleCancelApply = async (projectApplyData: ApplicationData) => {
    const confirmDelete = window.confirm('프로젝트 신청을 취소 하시겠습니까?')
    if (confirmDelete) {
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_API_ENDPOINT}/api/cancel_apply`,
          {
            data: {
              userId: localStorage.userId,
              projectId: projectApplyData.projectId,
              status: projectApplyData.status,
              applyDate: projectApplyData.applyDate,
            },
          },
        )

        if (response.status === 200) {
          const updatedData = userApplicationData.filter(item => {
            return (
              item.userId !== projectApplyData.userId ||
              item.projectId !== projectApplyData.projectId
            )
          })
          console.log('신청 취소 완료')
          setUserApplicationData(updatedData)
        } else {
        }
      } catch (error) {
        console.error('신청 취소하는 중 오류 발생:', error)
      }
    }
  }

  const [message, setMessage] = useState<string>('')
  const [projects, setProjects] = useState<ProjectsType>([])
  const [sortOption, setSortOption] = useState<string>(sortOptionEnums.latest)
  const [filteredData, setFilteredData] = useState<ProjectsType>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const handlePageChange = (page: number) => setCurrentPage(page)
  const [pageSize] = useState<number>(4)
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

  console.log('targetUserId', targetUserId)
  const userId =
    targetUserId && targetUserId !== 'profile'
      ? targetUserId
      : localStorage.userId
  const handleProjectStatusClick = (status: string) => {
    setCurrentProjectStatus(status)
  }

  const renderProfileEditBtn = () => {
    if (targetUserId !== userProfile?.userId) {
      return (
        <div>
          <Button
            type="primary"
            htmlType="submit"
            className="Pro__profileEditBtn"
          >
            <div>수정</div>
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
  }, [projects, currentProjectStatus, sortOption, targetUserId])

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
            project.applyDate = projectApplications[0].applyDate

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
  }, [projects, currentProjectStatus, sortOption, userApplicationData])

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

  const [currentSection, setCurrentSection] = useState<string>('myProject')

  const handleMenuClick = (e: { key: React.Key }) => {
    setCurrentSection(e.key as string)
  }

  return (
    <div style={{ marginTop: '10px' }}>
      <>
        <form onSubmit={handleSubmit}>
          <section className="Pro__pointAndGrade">
            <div className="Pro__point">
              <img
                style={{ maxWidth: '17px', maxHeight: '17px' }}
                src="src/assets/favicon.png"
              />
              <div>포인트: {userProfile?.point}</div>
            </div>
            {/* <div className="Pro__Grade">
                <div>등급: </div>
              </div> */}
          </section>

          <div className="Pro__userProfileContainer">
            <div className="Pro__userProfileNameAndAvatar">
              <div className="Pro__userProfileAvatar">아바타 자리</div>
              <div className="Pro__userProfileName">
                <label>이름</label>
                {targetUserId === userProfile?.userId ? (
                  <span className="UserProfileName__text">
                    {userProfile?.name}
                  </span>
                ) : (
                  <Input
                    className="UserProfileName__details"
                    value={userProfile?.name}
                    style={{ backgroundColor: 'white', color: 'black' }}
                  />
                )}
              </div>
            </div>
            <div className="UserProfile__line"></div>
            <section className="Pro__userEditProfileContainer">
              <div className="Pro__form_div">
                <label>닉네임</label>
                {targetUserId === userProfile?.userId ? (
                  <span className="UserProfile__text">
                    {userProfile?.nickname}
                  </span>
                ) : (
                  <Input
                    className="Pro__userProfile"
                    value={userProfile?.nickname}
                    style={{ backgroundColor: 'white', color: 'black' }}
                  />
                )}
              </div>

              <div className="Pro__form_div">
                <label>아이디</label>
                {targetUserId === userProfile?.userId ? (
                  <span className="UserProfile__text">
                    {userProfile?.userId}
                  </span>
                ) : (
                  <Input
                    className="Pro__userProfile"
                    value={userProfile?.userId}
                    style={{ backgroundColor: 'white', color: 'black' }}
                  />
                )}
              </div>
              <div className="Pro__form_div">
                <label>이메일</label>
                {targetUserId === userProfile?.userId ? (
                  <span className="UserProfile__text">
                    {userProfile?.email}
                  </span>
                ) : (
                  <Input
                    className="Pro__userProfile"
                    value={userProfile?.email}
                    style={{ backgroundColor: 'white', color: 'black' }}
                  />
                )}
              </div>
              <div className="Pro__form_div">
                <label>학과</label>
                {targetUserId === userProfile?.userId ? (
                  <span className="UserProfile__text">
                    {userProfile?.department}학과
                  </span>
                ) : (
                  <Input
                    className="Pro__userProfile"
                    value={userProfile?.department + '학과'}
                    style={{ backgroundColor: 'white', color: 'black' }}
                  />
                )}
              </div>
              <div className="Pro__form_div">
                <label>학번</label>
                {targetUserId === userProfile?.userId ? (
                  <span className="UserProfile__text">
                    {userProfile?.studentNumber}
                  </span>
                ) : (
                  <Input
                    className="Pro__userProfile"
                    value={userProfile?.studentNumber}
                    style={{ backgroundColor: 'white', color: 'black' }}
                  />
                )}
              </div>
              <div className="Pro__form_div">
                <label>Git 주소</label>
                {targetUserId === userProfile?.userId ? (
                  <span className="UserProfile__text">
                    {userProfile?.gitAddress}
                  </span>
                ) : (
                  <Input
                    className="Pro__userProfile"
                    value={userProfile?.gitAddress}
                    style={{ backgroundColor: 'white', color: 'black' }}
                  />
                )}
              </div>
              <div className="Pro__form_div">
                <label>기술 스택</label>
                {targetUserId === userProfile?.userId ? (
                  <span className="UserProfile__text">
                    {userProfile?.techStacks}
                  </span>
                ) : (
                  <Input
                    className="Pro__userProfile"
                    value={userProfile?.techStacks}
                    style={{ backgroundColor: 'white', color: 'black' }}
                  />
                )}
              </div>
              <div className="Pro__form_div">
                {targetUserId === userProfile?.userId ? null : (
                  <>
                    <label>비밀번호</label>
                    <Input.Password
                      className="Pro__userProfile"
                      value={userProfile?.password}
                      iconRender={visible =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                      style={{ backgroundColor: 'white', color: 'black' }}
                    />
                  </>
                )}
              </div>
              <p className="error__m">{message}</p>
            </section>
          </div>
          {renderProfileEditBtn()}
        </form>
      </>

      <div className="UserProfile__separater"></div>

      <div className="UserProfile__menu">
        <Menu
          onClick={handleMenuClick}
          selectedKeys={[currentSection]}
          mode="horizontal"
        >
          <Menu.Item key="myProject">내 프로젝트</Menu.Item>
          <Menu.Item key="myApplication">신청한 프로젝트</Menu.Item>
        </Menu>
      </div>

      {currentSection === 'myProject' && (
        <section className="Pro__myProject">
          <div>
            <ul className="P__sort__menu">
              {PROJECT_STATUSES.map(status => (
                <li
                  key={status.label}
                  onClick={() => handleProjectStatusClick(status?.value)}
                  className={
                    currentProjectStatus === status.value ? 'active' : ''
                  }
                >
                  <Button
                    type={
                      currentProjectStatus === status.value
                        ? 'primary'
                        : 'default'
                    }
                  >
                    {status.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div>
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
            <div>
              <Pagination
                className="Board__page"
                current={currentPage}
                total={filteredData?.length}
                pageSize={pageSize}
                showSizeChanger={false} // 페이지 크기 변경 옵션 숨김
                onChange={handlePageChange}
              />
            </div>
          </div>
        </section>
      )}

      {currentSection === 'myApplication' && (
        <section className="Pro__myApplication">
          <Table<ApplicationData>
            dataSource={userApplicationData}
            columns={columns}
            pagination={{
              position: ['bottomCenter'],
            }}
          ></Table>
        </section>
      )}
    </div>
  )
}

export default Profile
