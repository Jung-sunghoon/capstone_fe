import React from "react";
import { Card } from "antd";

// 프로젝트 데이터의 타입 정의
interface ProjectData {
  title: string;
  content: string;
  readCnt: number;
  likes: number;
  createdAt: Date;
  status: "진행 중" | "완료";
}

const { Meta } = Card;

interface ProjectCardProps {
  projectData: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectData }) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="example" src="URL_OF_YOUR_THUMBNAIL_IMAGE" />}
      actions={[
        <div>{`조회수: ${projectData.readCnt}`}</div>,
        <div>{`좋아요: ${projectData.likes}`}</div>,
        <div>{`날짜: ${projectData.createdAt.toDateString()}`}</div>,
      ]}
    >
      <Meta title={projectData.title} description={projectData.content} />
    </Card>
  );
};

export default ProjectCard;
