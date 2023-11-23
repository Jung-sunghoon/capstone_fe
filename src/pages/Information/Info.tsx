import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import './info.css'
import Search from '../Projects/Search'

export interface InfoType {
  num: number
  title: string
  date: string
  views: number
}

export type InfoTypes = InfoType[]

const Info: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('')
  const [infos, setInfos] = useState<InfoTypes>([])
  const [filteredData, setFilteredData] = useState<InfoTypes>([])

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
            <td>1</td>
            <td>안녕</td>
            <td>2023-02-01</td>
            <td>1</td>
            {/* {posts.map(post => (
              <tr key={post.num}>
                <td>{post.num}</td>
                <td>{post.title}</td>
                <td>{post.date}</td>
                <td>{post.views}</td>
              </tr>
            ))} */}
          </tbody>
          <tbody>
            <td>2</td>
            <td>잘가</td>
            <td>2023-02-01</td>
            <td>1</td>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Info
