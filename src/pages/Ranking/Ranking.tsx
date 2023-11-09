import { Col, Row, Table } from 'reactstrap'
import { users } from './mock/users'
import { isEmpty, size, map } from 'lodash'
import { Link } from 'react-router-dom'
import images from '@src/assets/images'
import './Ranking.css'
import {
  ContainerOutlined,
  EllipsisOutlined,
  CrownOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Avatar, Card } from 'antd'
const { Meta } = Card

const Ranking: React.FC = () => {
  // points를 기준으로 사용자 목록을 내림차순으로 정렬
  //@ts-ignore
  const sortedUsers = [...users].sort((a, b) => b.points - a.points)

  return (
    <div style={{ marginTop: '40px', marginLeft: '20px' }}>
      <Row>
        {sortedUsers.map((user: any, index: number) => {
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
                        src={user.img}
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
    </div>
  )
}

export default Ranking
