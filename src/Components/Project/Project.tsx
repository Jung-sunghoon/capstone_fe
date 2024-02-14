import React from 'react'
import { Card, Tag } from 'antd'
import { LikeFilled, EyeFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { ProjectType } from '@src/types'
import { formatDate } from '@src/utils/common'
import { useNavigate } from 'react-router-dom'

const { Meta } = Card

interface ProjectProps {
  projectData: ProjectType
}

const Project: React.FC<ProjectProps> = ({ projectData }) => {
  const info = projectData
  const navigate = useNavigate()
  const techstacks = localStorage.getItem('techstacks')

  return (
    // Antd 카드 컴포넌트
    <Card
      style={{
        marginBottom: '30px',
        maxWidth: '400px',
        maxHeight: '300px',
      }}
      cover={
        <img
          height={160}
          style={{
            objectFit: 'cover',
            cursor: 'pointer',
          }}
          alt="example"
          src={info?.thumbnail}
          onClick={() => {
            navigate(`/project/${info?.projectId}`)
          }}
        />
      }
      actions={[
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <EyeFilled
            style={{
              marginRight: '10px',
              fontSize: '18px',
            }}
          />
          {`${info?.views}`}
        </div>,
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LikeFilled
            style={{
              marginRight: '10px',
              fontSize: '18px',
            }}
          />
          {`${info?.likes}`}
        </div>,
        <div>{`${formatDate(new Date(info?.generateDate))}`}</div>,
      ]}
    >
      <Link to={`/project/${info?.projectId}`}>
        <Meta
          title={info?.projectTitle}
          // 기술 스택 태그를 위한 map 함수
          description={
            techstacks &&
            JSON.parse(techstacks)
              ?.filter((item: any) =>
                projectData?.techIds.includes(item.techId),
              )
              .map((tech: any, index: number) => {
                // 태그의 갯수가 3개 이상이면 + (length - 3) 태그 추가
                return index >= 3 ? (
                  <Tag key={'tag_' + index} color="magenta">
                    +{' '}
                    {JSON.parse(techstacks)?.filter((item: any) =>
                      projectData?.techIds.includes(item.techId),
                    ).length - 3}
                  </Tag>
                ) : (
                  <Tag key={'tag_' + index} color="magenta">
                    {tech?.techName}
                  </Tag>
                )
              })
          }
        />
      </Link>
    </Card>
  )
}

export default Project
