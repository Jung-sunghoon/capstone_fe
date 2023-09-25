// Generate.tsx

import React, { useState } from "react";
import { Form, Input, Button, DatePicker, message } from "antd";
import dayjs from "dayjs";
import axios from "axios"; // axios 추가

// API 엔드포인트
const API_URL = "http://localhost:8080/api/generate_project";

// 프로젝트 데이터의 타입 정의
interface ProjectData {
  projectId: number;
  projectTitle: string;
  description: string;
  creatorId: string;
  recruitmentStatus: string;
  recruitmentCount: number;
  generateDate: string;
  acceptedID: string;
}

interface GenerateProps {
  onGenerate?: (projectData: ProjectData) => void;
}

const Generate: React.FC<GenerateProps> = ({ onGenerate }) => {
  const [formData, setFormData] = useState<ProjectData>({
    projectId: 0,
    projectTitle: "",
    description: "",
    creatorId: localStorage.getItem("userId") || "", // userId를 가져옴
    recruitmentStatus: "",
    recruitmentCount: 0,
    generateDate: "",
    acceptedID: "",
  });

  const handleFormSubmit = async () => {
    try {
      // API 호출하여 프로젝트 생성
      const response = await axios.post(API_URL, formData);

      // 응답 데이터 확인
      const createdProject = response.data as ProjectData;
      console.log("새로운 프로젝트 생성:", createdProject);

      // 부모 컴포넌트로 데이터 전달
      if (onGenerate) {
        onGenerate(createdProject);
      }

      // 성공 메시지 표시
      message.success("프로젝트가 생성되었습니다.");
    } catch (error) {
      // 오류 처리
      console.error("프로젝트 생성 오류:", error);

      // 오류 메시지 표시
      message.error("프로젝트 생성 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <h2>프로젝트 생성</h2>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
        layout="horizontal"
        onFinish={handleFormSubmit}
      >
        <Form.Item
          label="프로젝트 제목"
          name="projectTitle"
          rules={[{ required: true, message: "프로젝트 제목을 입력하세요." }]}
        >
          <Input
            value={formData.projectTitle}
            onChange={(e) =>
              setFormData({ ...formData, projectTitle: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          label="프로젝트 설명"
          name="description"
          rules={[{ required: true, message: "프로젝트 설명을 입력하세요." }]}
        >
          <Input.TextArea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
          <Button type="primary" htmlType="submit">
            생성
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Generate;
