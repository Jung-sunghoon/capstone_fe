import React, { useEffect, useState, useCallback } from 'react'
import { List, Pagination, Button, Select } from 'antd'
import { useNavigate } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'

import { ProjectsType, ProjectType } from '@src/types'
import Project from '@src/Components/Project'
import Search from './Search'
import { sortOptionEnums } from '../../enums/enums'

import './Projects.css'

// import { mockProjects } from './mock/mockProjects'
import axios from 'axios'

const { Option } = Select

const PROJECT_STATUSES = [
  { label: '진행 중', value: 'Ps_pr' },
  { label: '프로젝트 공유', value: 'Ps_co' },
]

const Projects: React.FC = () => {
  const navigate = useNavigate()
  // State
  const [searchText, setSearchText] = useState<string>('')
  const [projects, setProjects] = useState<ProjectsType>([])
  const [filteredData, setFilteredData] = useState<ProjectsType>([])

  const [sortOption, setSortOption] = useState<string>(sortOptionEnums.latest)
  const [currentProjectStatus, setCurrentProjectStatus] =
    useState<string>('Ps_pr')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize] = useState<number>(12)

  // Handlers
  const handleSearch = (text: string) => setSearchText(text)
  const handlePageChange = (page: number) => setCurrentPage(page)
  const handleFilterChange = (filterOption: string) => {
    setSortOption(filterOption)
    performSearchAndSort()
  }
  const handleProjectStatusClick = (status: string) => {
    setCurrentProjectStatus(status)
    performSearchAndSort()
  }
  const handleNewPost = () => navigate('/Generate')

  // Sorting & Filtering
  const performSearchAndSort = useCallback(() => {
    let filtered = [...projects] // 원본 데이터를 보존하기 위해 복사

    if (currentProjectStatus) {
      filtered = filtered.filter(
        item => item.projectInfo.projectStatus === currentProjectStatus,
      )
    }

    if (searchText) {
      filtered = filtered.filter(item =>
        item.projectInfo.projectTitle
          .toLowerCase()
          .includes(searchText.toLowerCase()),
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
  }, [projects, currentProjectStatus, searchText, sortOption])

  // Effects
  useEffect(() => {
    // Data Fetching
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

    fetchBoardData()
  }, [])

  useEffect(() => {
    performSearchAndSort()
  }, [projects, currentProjectStatus, searchText, sortOption])

  // Render
  const slicedData = filteredData?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )
  const sortOptions = [
    { key: sortOptionEnums.latest, label: '최신순' },
    { key: sortOptionEnums.views, label: '조회순' },
    { key: sortOptionEnums.likes, label: '좋아요순' },
  ]

  return (
    <div
      style={{
        backgroundColor: '#F5F5F5',
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: '30px',
            marginRight: '30px',
            paddingTop: '20px',
          }}
        >
          <ul className="B__sort__menu">
            <Select
              defaultValue={sortOptionEnums.latest}
              style={{ width: 120, marginRight: '10px' }}
              onChange={handleFilterChange}
            >
              {sortOptions.map(option => (
                <Option key={option.key} value={option.key}>
                  {option.label}
                </Option>
              ))}
            </Select>

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

          <div className="floating-button">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleNewPost}
            />
          </div>

          {/* 검색 컴포넌트를 렌더링하고 검색어 입력 핸들러 함수를 전달 */}
          <Search onSearch={handleSearch} />
        </div>

        {/* 카드 리스트 */}
        <List
          style={{
            marginTop: '30px',
            marginLeft: '30px',
            marginRight: '30px',
          }}
          grid={{ gutter: 12, column: 3 }}
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
    </div>
  )
}

export default Projects
