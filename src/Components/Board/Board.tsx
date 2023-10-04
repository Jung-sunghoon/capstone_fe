import React, { useEffect, useState } from 'react'
import { List, Pagination, Button } from 'antd'
import { ProjectData } from './types'
import './board.css'
import ProjectCard from './ProjectCard'
import Search from './Search'
import Filter from './Filter'
import Generate from './Generate'
import { boardList } from './mock/boardList'
import { SearchOutlined } from '@ant-design/icons'

const Board: React.FC = () => {
  // 검색어 상태를 저장하는 상태 변수
  const [searchText, setSearchText] = useState<string>('')
  // 검색 및 정렬 결과 데이터를 저장하는 상태 변수
  const [filteredData, setFilteredData] = useState<ProjectData[]>(boardList)
  // 검색어 입력 필드를 표시할지 여부를 저장하는 상태 변수
  const [sortOption, setSortOption] = useState<string>('latest')
  // 현재 선택된 상태(진행 중 또는 완료)를 저장하는 상태 변수
  const [currentStatus, setCurrentStatus] = useState<'진행 중' | '완료'>(
    '진행 중',
  )

  // 페이지네이션을 위한 상태 변수
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(16) // 한 페이지당 보일 항목 수

  // 페이지네이션 변경 핸들러 함수
  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page)
  }

  // 현재 페이지에 맞게 데이터를 잘라서 보여줌
  const slicedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )

  // 검색어 입력 핸들러 함수
  const handleSearch = (text: string) => {
    setSearchText(text)
  }

  // 정렬 함수들
  const sortFunctions: Record<
    string,
    (a: ProjectData, b: ProjectData) => number
  > = {
    latest: (a, b) => {
      const dateA = new Date(a.generateDate)
      const dateB = new Date(b.generateDate)
      return dateB.getTime() - dateA.getTime()
    },
    popular: (a, b) => b.readCnt - a.readCnt,
    likes: (a, b) => b.likes - a.likes,
  }

  // 검색 및 정렬 수행 함수
  const performSearchAndSort = () => {
    // 검색어를 기반으로 데이터 필터링
    let filtered = boardList
      .filter(item => item.status === currentStatus) // 현재 상태에 따라 필터링
      .filter(item =>
        item.projectTitle.toLowerCase().includes(searchText.toLowerCase()),
      )

    // 정렬 옵션에 따라 데이터 정렬
    if (sortOption && sortFunctions[sortOption]) {
      filtered.sort(sortFunctions[sortOption])
    }

    // 필터링 및 정렬된 데이터를 상태 변수에 저장
    setFilteredData(filtered)
  }

  // 정렬 옵션 메뉴 클릭 핸들러 함수
  const handleFilterClick = (filterOption: string) => {
    setSortOption(filterOption)
    performSearchAndSort()
  }

  // "진행 중", "완료" 버튼 클릭 핸들러 함수
  const handleStatusClick = (status: any) => {
    setCurrentStatus(status)
    performSearchAndSort()
  }
  // 컴포넌트가 처음 렌더링될 때 초기 데이터 설정
  useEffect(() => {
    performSearchAndSort()
  }, [sortOption, currentStatus, searchText])

  // sort 버튼 생성 코드
  const sortOptions = [
    { key: 'latest', label: '최신순' },
    { key: 'popular', label: '조회순' },
    { key: 'likes', label: '좋아요순' },
  ]

  return (
    <div>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '30px',
            paddingTop: '20px',
          }}
        >
          <ul className="B__sort__menu">
            {/* <li className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              
              <Filter
                onFilter={handleMenuClick}
                currentStatus={currentStatus}
              />
            </li> */}
            {sortOptions.map(option => (
              <Button
                key={option.key}
                style={{ marginRight: '10px' }}
                onClick={() => handleFilterClick(option.key)}
                type={sortOption === option.key ? 'primary' : 'default'}
              >
                {option.label}
              </Button>
            ))}
            {['진행 중', '완료'].map(status => (
              <li
                key={status}
                onClick={() => handleStatusClick(status)}
                className={`${status === '진행 중' ? 'pr' : 'co'}__board ${
                  currentStatus === status ? 'active' : ''
                }`}
              >
                <Button type={currentStatus === status ? 'primary' : 'default'}>
                  {status}
                </Button>
              </li>
            ))}
          </ul>

          {/* 검색 컴포넌트를 렌더링하고 검색어 입력 핸들러 함수를 전달 */}
          <Search onSearch={handleSearch} />
        </div>

        {/* 카드 리스트 */}
        <List
          style={{
            marginTop: '30px',
            marginLeft: '30px',
          }}
          grid={{ gutter: 16, column: 4 }}
          dataSource={slicedData} // 페이지네이션에 따라 잘라낸 데이터를 사용
          renderItem={(item: ProjectData) => (
            <List.Item>
              <ProjectCard projectData={item} />
            </List.Item>
          )}
        />
      </div>
      <Pagination
        className="Board__page"
        current={currentPage}
        total={filteredData.length}
        pageSize={pageSize}
        showSizeChanger={false} // 페이지 크기 변경 옵션 숨김
        onChange={handlePageChange}
      />
    </div>
  )
}

export default Board
