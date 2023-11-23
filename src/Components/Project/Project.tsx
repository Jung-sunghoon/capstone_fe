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
    <Card
      style={{
        marginBottom: '30px',
        maxWidth: '400px',
        maxHeight: '300px',
      }}
      cover={
        //@ts-ignore
        <img
          height={160}
          style={{
            objectFit: 'cover',
            cursor: 'pointer',
          }}
          alt="example"
          //@ts-ignore
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
          description={
            techstacks &&
            JSON.parse(techstacks)
              ?.filter((item: any) =>
                projectData?.techIds.includes(item.techId),
              )
              .map((tech: any, index: number) => {
                if (index > 3) return

                return index === 3 ? (
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
