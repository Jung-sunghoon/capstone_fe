import React, { useState, useEffect } from 'react'
import { Form, Input, Button, DatePicker, message } from 'antd'
import axios from 'axios'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

const Generate: React.FC = () => {
  const [form] = Form.useForm()

  const onFinish = async (values: any) => {
    try {
      // 프로젝트 데이터 생성
      const projectData = {
        projectTitle: values.projectTitle,
        description: values.description,
        userId: values.userId,
        recruitmentCount: values.recruitmentCount,
        projectIId: null, // 자동 증가 (API에서 처리)
        ProjectStatus: 'Ps_pr',
        status: 'S_pr',
        likes: 0,
        views: 0,
        generateData: new Date().toISOString(), // 현재 시간 (API 내부에서 처리)
      }

      // API 호출
      const response = await axios.post(
        'http://localhost:8080/api/generate_project',
        projectData,
      )

      if (response.status === 201) {
        message.success('프로젝트가 성공적으로 생성되었습니다.')
        form.resetFields()
      } else {
        message.error('프로젝트 생성 중 오류가 발생했습니다.')
      }
    } catch (error) {
      message.error('프로젝트 생성 중 오류가 발생했습니다.')
      console.error('프로젝트 생성 중 오류:', error)
    }
  }

  return (
    <div>
      <h2>프로젝트 생성</h2>
      <Form form={form} name="createProject" onFinish={onFinish}>
        <Form.Item
          name="projectTitle"
          label="프로젝트 제목"
          rules={[{ required: true, message: '프로젝트 제목을 입력해주세요' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="프로젝트 설명"
          rules={[{ required: true, message: '프로젝트 설명을 입력해주세요' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="userId"
          label="사용자 ID"
          rules={[{ required: true, message: '사용자 ID를 입력해주세요' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="recruitmentCount"
          label="모집 인원"
          rules={[{ required: true, message: '모집 인원을 입력해주세요' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            프로젝트 생성
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Generate
