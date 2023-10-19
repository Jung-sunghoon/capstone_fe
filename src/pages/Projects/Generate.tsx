import React, { useState, useEffect } from 'react'
import { Form, Input, Button, message, Upload, InputNumber } from 'antd'
import axios from 'axios'
import TextEditor from '@src/Components/TextEditor'
import { useNavigate } from 'react-router-dom'
import ImgCrop from 'antd-img-crop'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'

const Generate: React.FC = () => {
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()
  const [textEditor, setTextEditor] = useState('')
  const navigate = useNavigate()

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

      const thumbnailFile = fileList[0].originFileObj as Blob

      const formData = new FormData()
      formData.append(
        'project',
        JSON.stringify({
          projectTitle: values.projectTitle,
          userId: values.userId,
          description: textEditor,
          recruitmentCount: values.recruitmentCount,
        }),
      )
      formData.append('thumbnail', thumbnailFile)

      console.log('textEditor', textEditor)

      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/generate_project`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )

      if (response.status === 200) {
        messageApi.success('프로젝트가 성공적으로 생성되었습니다.')
        form.resetFields()
        navigate('/projects')
      } else {
        messageApi.error('프로젝트 생성 중 오류가 발생했습니다.')
      }
    } catch (error) {
      messageApi.error('프로젝트 생성 중 오류가 발생했습니다.')
      console.error('프로젝트 생성 중 오류:', error)
    }
  }

  const [fileList, setFileList] = useState<UploadFile[]>([])

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj as RcFile)
        reader.onload = () => resolve(reader.result as string)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }

  return (
    <div>
      {contextHolder}
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
            <InputNumber />
          </Form.Item>

          <Form.Item label="대표 이미지">
            <ImgCrop rotationSlider>
              <Upload
                action={`${
                  import.meta.env.VITE_API_ENDPOINT
                }/api/generate_project`}
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 1 && '+ Upload'}
              </Upload>
            </ImgCrop>{' '}
          </Form.Item>
          <Form.Item
            name="techNames"
            label="기술 스택"
            rules={[{ required: true, message: '기술 스택을 입력해주세요' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="프로젝트 내용">
            <div>
              <TextEditor
                isNew={true}
                edit={true}
                setTextEditor={setTextEditor}
                html={''}
              />
            </div>
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
