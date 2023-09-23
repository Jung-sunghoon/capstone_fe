import React from "react";
import { Card } from "antd";

// 프로젝트 데이터의 타입 정의
interface ProjectData {
  projectTitle: string; // title을 projectTitle로 변경
  description: string; // content를 description으로 변경
  readCnt: number;
  likes: number;
  generateDate: string; // createdAt를 generateDate로 변경
  status: "진행 중" | "완료";
  // projectId: number; // 새로운 필드 projectId 추가
  // creatorId: string; // 새로운 필드 creatorId 추가
  // recruitmentStatus: string; // 새로운 필드 recruitmentStatus 추가
  // recruitmentCount: number; // 새로운 필드 recruitmentCount 추가
  // acceptedID: string; // 새로운 필드 acceptedID 추가
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
        <div>{`날짜: ${projectData.generateDate.toString()}`}</div>,
      ]}
    >
      <Meta
        title={projectData.projectTitle}
        description={projectData.description}
      />
    </Card>
  );
};

export default ProjectCard;
