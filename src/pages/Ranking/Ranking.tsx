import { Col, Row } from 'reactstrap'
import { users } from './mock/users'
import images from '@src/assets/images'
import './Ranking.css'
import {
  ContainerOutlined,
  EllipsisOutlined,
  CrownOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Avatar, Card, Table } from 'antd'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { UserType } from '@src/types'
const { Meta } = Card

const Ranking: React.FC = () => {
  // points를 기준으로 사용자 목록을 내림차순으로 정렬
  //@ts-ignore
  const sortedUsers = [...users].sort((a, b) => b.points - a.points)

  const topThreeUsers = sortedUsers.slice(0, 3)
  const otherUsers = sortedUsers.slice(3)
  const defaultAvatar = 'src/assets/images/users/defaultAvatar.png'

  const [, setUserRankingList] = useState<UserType[] | undefined>(undefined)

  const fetchRankingList = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/api/point_ranking`,
      )
      if (response.status === 200) {
        setUserRankingList(response.data)
      } else {
        setUserRankingList([])
      }
    } catch (error) {
      // 오류 처리
      console.error('Error fetching project list:', error)
    }
  }

  useEffect(() => {
    fetchRankingList()
  }, [])

  return (
    <div style={{ margin: '40px 30px 0 30px' }}>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        {topThreeUsers.map((user: any, index: number) => {
          // @ts-ignore
          let img: any = images['thumbnail' + (index + 1)]
          return (
            <Col
              xs="12"
              sm="4"
              md="3"
              lg="2"
              style={{
                marginBottom: '30px',
              }}
              key={user.id} // 사용자마다 고유한 키를 제공해야 합니다.
            >
              <div className="card-container">
                <Card
                  style={{
                    maxWidth: '300px',
                    height: '100%',
                    position: 'relative',
                  }}
                  //@ts-ignore
                  cover={<img alt="example" src={img} />}
                  actions={[
                    <UserOutlined key="setting" />,
                    <ContainerOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={
                      <Avatar
                        style={{
                          width: '70px',
                          height: '70px',
                        }}
                        src={user.img || defaultAvatar}
                      />
                    }
                    title={user.name}
                    description={user.points}
                  />
                  {index < 3 ? (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 135,
                        left: 45,
                      }}
                    >
                      <CrownOutlined
                        style={{
                          color:
                            index === 0
                              ? 'gold'
                              : index === 1
                              ? 'silver'
                              : index === 2
                              ? '#cd7f32'
                              : 'none',
                          fontWeight: 'bold',
                          fontSize: '28px',
                        }}
                      />
                    </div>
                  ) : null}
                </Card>
              </div>
            </Col>
          )
        })}
      </Row>
      {/* 상위 3명 이외의 사용자를 테이블로 표시 */}
      <Table
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '70%',
          justifyContent: 'center',
          margin: 'auto',
        }}
        dataSource={otherUsers}
        pagination={{
          position: ['bottomCenter'],
        }}
        columns={[
          {
            title: 'Avatar',
            dataIndex: 'img',
            key: 'img',
            render: img => (
              <img
                src={img}
                alt="Avatar"
                style={{ width: '50px', height: '50px', borderRadius: '100%' }}
              />
            ),
          },
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Points',
            dataIndex: 'points',
            key: 'points',
          },
          {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            width: '150px',
            render: () => (
              <span
                style={{
                  padding: '0',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <UserOutlined style={{ marginRight: 16 }} />
                <ContainerOutlined style={{ marginRight: 16 }} />
                <EllipsisOutlined />
              </span>
            ),
          },
        ]}
      />
    </div>
  )
}

export default Ranking
