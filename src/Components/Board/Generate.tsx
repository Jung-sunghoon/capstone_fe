import React, { useState, useEffect } from 'react'
import { Form, Input, Button, message, Upload } from 'antd'
import axios from 'axios'
import { UploadChangeParam, UploadFile } from 'antd/es/upload'
import { UploadListType } from 'antd/es/upload/interface'

const Generate: React.FC = () => {
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState<UploadFile[]>([])

  useEffect(() => {
    const savedUserId = localStorage.getItem('userId')
    if (savedUserId) {
      form.setFieldsValue({
        userId: savedUserId,
      })
    }
  }, [])

  const onFinish = async (values: any) => {
    try {
      localStorage.setItem('userId', values.userId)

      const projectData = {
        projectTitle: values.projectTitle,
        description: values.description,
        userId: values.userId,
        recruitmentCount: values.recruitmentCount,
        projectIId: null,
        ProjectStatus: 'Ps_pr',
        status: 'S_pr',
        likes: 0,
        views: 0,
        generateData: new Date().toISOString(),
        images: fileList.map((file: UploadFile) => file.url), // 이미지 URL 목록
      }

      const response = await axios.post(
        'http://localhost:8080/api/generate_project',
        projectData,
      )

      if (response.status === 201) {
        message.success('프로젝트가 성공적으로 생성되었습니다.')
        form.resetFields()
        setFileList([]) // 이미지 목록 초기화
      } else {
        message.error('프로젝트 생성 중 오류가 발생했습니다.')
      }
    } catch (error) {
      message.error('프로젝트 생성 중 오류가 발생했습니다.')
      console.error('프로젝트 생성 중 오류:', error)
    }
  }

  const uploadProps = {
    action: 'http://localhost:8080/api/upload_image',
    listType: 'picture' as UploadListType,
    fileList,
    onChange(info: UploadChangeParam<UploadFile>) {
      if (info.file.status === 'done') {
        setFileList([...fileList, info.file])
      }
    },
  }

  return (
    <div>
      <Form
        form={form}
        name="generate"
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <div
          style={{
            marginTop: '80px',
            justifyContent: 'center',
          }}
        >
          <Form.Item
            name="projectTitle"
            label="프로젝트 제목"
            rules={[
              { required: true, message: '프로젝트 제목을 입력해주세요' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="userId"
            label="사용자 ID"
            rules={[{ required: true, message: '사용자 ID를 입력해주세요' }]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            name="recruitmentCount"
            label="모집 인원"
            rules={[{ required: true, message: '모집 인원을 입력해주세요' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="프로젝트 내용"
            rules={[
              { required: true, message: '프로젝트 설명을 입력해주세요' },
            ]}
          >
            <Input.TextArea style={{ height: '400px' }} />
            {/* <Editor
              value={description}
              onChange={handleEditorChange}
              renderHTML={renderHTML}
            /> */}
            {fileList.map(file => (
              <div key={file.uid}>
                <img
                  src={file.url}
                  alt="이미지"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '200px',
                    margin: '10px 0',
                  }}
                />
              </div>
            ))}
          </Form.Item>
          <Form.Item label="프로젝트 이미지">
            <Upload {...uploadProps} showUploadList={true}>
              <Button>이미지 업로드</Button>
            </Upload>
          </Form.Item>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            textAlign: 'right',
            marginRight: '30px',
          }}
        >
          <Form.Item>
            <Button type="primary" htmlType="submit">
              프로젝트 생성
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}

export default Generate
