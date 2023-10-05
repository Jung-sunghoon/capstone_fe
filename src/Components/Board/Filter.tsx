// Filter 컴포넌트
import React, { useEffect } from 'react'
import { Menu, Dropdown, Select } from 'antd'
import { DownOutlined } from '@ant-design/icons'

interface FilterProps {
  onFilter: (filterOption: string) => void
  currentStatus: '진행 중' | '완료'
}

const Filter: React.FC<FilterProps> = ({ onFilter, currentStatus }) => {
  useEffect(() => {
    // 최초 렌더링 시 "최신순"으로 설정
    onFilter('latest')
  }, [])

  const handleMenuClick = (e: { key: string }) => {
    onFilter(e.key)
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="latest">최신순</Menu.Item>
      <Menu.Item key="views">조회순</Menu.Item>
      <Menu.Item key="likes">좋아요순</Menu.Item>
    </Menu>
  )

  return (
    <div>
      <Dropdown overlay={menu} trigger={['click']}>
        <span>
          정렬 <DownOutlined />
        </span>
      </Dropdown>
    </div>
  )
}

export default Filter
