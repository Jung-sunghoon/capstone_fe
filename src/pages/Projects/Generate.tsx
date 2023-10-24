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
  const [type, setType] = useState<string>('')
  const navigate = useNavigate()
  const currentURL = window.location.href
  const segments = currentURL.split('/')
  const projectId = segments[segments.length - 1]

  const initialValue = {}
  // const initialValue = {
  //   projectId: 4,
  //   projectTitle: 'test',
  //   description: 'testtest',
  //   projectStatus: 'Ps_pr',
  //   recruitmentCount: 33,
  // }

  // const generateUrl = `${
  //   import.meta.env.VITE_API_ENDPOINT
  // }/api/generate_project`
  // const editUrl = `${import.meta.env.VITE_API_ENDPOINT}/api/update_project`

  /*
  1. url이 generate인지 edit인지 구분
  2. edit일 경우 projectId값 확인
  3. edit이면서 projectId가 있을 경우 project 정보 API 호출
  4. 호출된 API 결과 정보 각 컴포넌트에 입력 (initialValue에 입력)
  5. 수정 완료 시 수정 API 호출하도록 적용
  */
  useEffect(() => {
    const savedUserId = localStorage.getItem('userId')
    if (savedUserId) {
      form.setFieldsValue({
        userId: savedUserId,
      })
    }
  }, [])

  useEffect(() => {
    if (currentURL.includes('/generate')) {
      setType('generate')
    } else if (currentURL.includes(`/edit/${projectId}`)) {
      setType('edit')
    }
  }, [currentURL])

  const onFinish = async (values: any) => {
    try {
      localStorage.setItem('userId', values.userId)

      const thumbnailFile = fileList[0].originFileObj as Blob

      const formData = new FormData()

      console.log('textEditor', textEditor)

      if (type === 'generate') {
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
      } else if (type === 'edit') {
        formData.append(
          'project',
          JSON.stringify({
            projectTitle: values.projectTitle,
            description: textEditor,
            recruitmentCount: values.recruitmentCount,
          }),
        )
        formData.append('thumbnail', thumbnailFile)

        console.log('edit finish')
      }
    } catch (error) {
      messageApi.error('프로젝트 생성 중 오류가 발생했습니다.')
      console.error('프로젝트 생성 중 오류:', error)
    }
  }

  const [fileList, setFileList] = useState<UploadFile[]>([])

  const onChange: UploadProps['onChange'] = async ({
    fileList: newFileList,
  }) => {
    console.log('newFileList', newFileList)
    setFileList(newFileList)
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
        initialValues={initialValue}
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
            <InputNumber style={{ width: '100%' }} min={0} />
          </Form.Item>

          <Form.Item label="대표 이미지">
            <Upload
              beforeUpload={f => {
                f
              }}
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture"
              fileList={fileList}
              onChange={onChange}
              onPreview={() => {
                return
              }}
            >
              {fileList.length < 1 && '+ Upload'}
            </Upload>
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
              {`프로젝트 ${type === 'generate' ? '생성' : '수정'}`}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}

export default Generate
