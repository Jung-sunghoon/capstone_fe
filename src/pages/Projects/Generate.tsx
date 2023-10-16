import React, { useState, useEffect } from 'react'
import { Form, Input, Button, message, Upload } from 'antd'
import axios from 'axios'
import TextEditor from '@src/Components/TextEditor'
import { useNavigate } from 'react-router-dom'
import ImgCrop from 'antd-img-crop'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'

const Generate: React.FC = () => {
  const [form] = Form.useForm()
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
      const projectData = {
        projectId: null,
        projectTitle: values.projectTitle,
        description: textEditor,
        userId: values.userId,
        projectStatus: 'Ps_pr',
        status: 'S_pr',
        recruitmentCount: values.recruitmentCount,
        generateDate: new Date().toISOString(),
        likes: 0,
        views: 0,
      }

      console.log('textEditor', textEditor)
      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/generate_project`,
        projectData,
      )

      if (response.status === 200) {
        message.success('프로젝트가 성공적으로 생성되었습니다.')
        form.resetFields()
        navigate('/projects')
      } else {
        message.error('프로젝트 생성 중 오류가 발생했습니다.')
      }
    } catch (error) {
      message.error('프로젝트 생성 중 오류가 발생했습니다.')
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

          <Form.Item label="대표 이미지">
            <ImgCrop rotationSlider>
              <Upload
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 1 && '+ Upload'}
              </Upload>
            </ImgCrop>{' '}
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
