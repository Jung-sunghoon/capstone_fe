import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import './info.css'
import Search from '../Projects/Search'
import { Pagination } from 'antd'
import { Link } from 'react-router-dom'

export interface InfoType {
  id: number
  title: string
  generateDate: string
  views: number
}

export type InfoTypes = InfoType[]

const Info: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('')
  const [infos, setInfos] = useState<InfoTypes>([])
  const [filteredData, setFilteredData] = useState<InfoTypes>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize] = useState<number>(10)
  const handlePageChange = (page: number) => setCurrentPage(page)

  const slicedData = filteredData?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )

  const handleSearch = (text: string) => setSearchText(text)
  const handleFilterChange = () => {
    performSearchAndSort()
  }

  const performSearchAndSort = useCallback(() => {
    let filtered = [...infos] // 원본 데이터를 보존하기 위해 복사

    if (searchText) {
      filtered = filtered.filter(item =>
        item?.title.toLowerCase().includes(searchText.toLowerCase()),
      )
    }

    setFilteredData(filtered)
  }, [infos, searchText])

  const virtualData: InfoTypes = [
    { id: 1, title: '안녕', generateDate: '2023-02-01', views: 1 },
    { id: 2, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 3, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 4, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 5, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 6, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 7, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 8, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 9, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 10, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 11, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 12, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 13, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 14, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 15, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 16, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 17, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 18, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 19, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 20, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 21, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 22, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 23, title: '잘가', generateDate: '2023-02-01', views: 1 },
    { id: 24, title: '잘가', generateDate: '2023-02-01', views: 1 },

    // ... 더 많은 가상 데이터 항목 추가
  ]

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(``)
  //       const data = response.data
  //       setInfos(data)
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }
  // }, [])

  useEffect(() => {
    // 여기서 가상 데이터를 상태에 설정
    setInfos(virtualData)
    // 가상 데이터로부터 검색 및 정렬 수행
    performSearchAndSort()
  }, [virtualData, searchText])

  useEffect(() => {
    performSearchAndSort()
  }, [infos, searchText])

  return (
    <div>
      <div
        style={{
          margin: '50px 100px 0 100px',
          paddingLeft: '30px',
          paddingRight: '30px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>IT 정보</h2>
          <div style={{ marginTop: '20px' }}>
            <Search onSearch={handleSearch} />
          </div>
        </div>
        <table className="infoTable">
          <colgroup>
            <col className="colNum"></col>
            <col className="colTitle"></col>
            <col className="colDate"></col>
            <col className="colView"></col>
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {slicedData?.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <Link to={`/infodetails/${item.id}`}>{item.title}</Link>
                </td>
                <td>{item.generateDate}</td>
                <td>{item.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: '10px' }}>
          <Pagination
            className="Board__page"
            current={currentPage}
            total={filteredData?.length}
            pageSize={pageSize}
            showSizeChanger={false} // 페이지 크기 변경 옵션 숨김
            onChange={handlePageChange}
          />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Info
