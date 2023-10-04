import React, { useState, useEffect, useRef } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './search.css'

interface SearchProps {
  onSearch: (text: string, isSearchVisible: boolean) => void
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>('')
  const searchRef = useRef<HTMLDivElement>(null)

  const handleSearch = (text: string) => {
    setSearchText(text)
    onSearch(text, true) // 검색어를 입력할 때 검색 수행
  }

  return (
    <div ref={searchRef}>
      <form className="srh__form" onSubmit={e => e.preventDefault()}>
        <Input
          type="text"
          placeholder="프로젝트 검색"
          value={searchText}
          className="srh__input"
          onChange={e => handleSearch(e.target.value)}
          addonBefore={<SearchOutlined />}
        />
      </form>
    </div>
  )
}

export default Search
