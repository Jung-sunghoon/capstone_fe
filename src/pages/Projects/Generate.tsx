import React, { useState, useEffect } from 'react'
import { Form, Input, Button, message, Upload, InputNumber, Select } from 'antd'
import axios from 'axios'
import TextEditor from '@src/Components/TextEditor'
import { useNavigate } from 'react-router-dom'
import { UploadOutlined } from '@ant-design/icons'
import type { UploadFile, UploadProps } from 'antd/es/upload/interface'
import { ProjectType } from '@src/types'

const { Option } = Select

const Generate: React.FC = () => {
  const [form] = Form.useForm()
  const [initialValue, setInitialValue] = useState({
    projectTitle: '',
    projectStatus: '진행 중',
    status: '모집 중',
    recruitmentCount: 0,
  })
  const [messageApi, contextHolder] = message.useMessage()
  const [textEditor, setTextEditor] = useState('')
  const [type, setType] = useState<string>('')
  const navigate = useNavigate()
  const currentURL = window.location.href
  const segments = currentURL.split('/')
  const projectId = segments[segments.length - 1]
  const techstacks = localStorage.getItem('techstacks')
  const projectStatus = [
    { label: '진행 중', value: 'Ps_pr' },
    { label: '프로젝트 공유', value: 'Ps_co' },
  ]
  const status = [
    { label: '모집 중', value: 'S_pr' },
    { label: '모집 완료', value: 'S_co' },
  ]

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
  // useEffect(() => {
  //   form.setFieldsValue({
  //     projectTitle: 'test',
  //     projectStatus: '진행 중',
  //     status: '모집 중',
  //     recruitmentCount: 10,
  //     // ... 여기에 필요한 다른 필드 값을 추가하십시오.
  //   })
  // }, [project])

  useEffect(() => {
    if (currentURL.includes('/generate')) {
      setType('generate')
    } else if (currentURL.includes(`/edit/${projectId}`)) {
      setType('edit')

      const fetchData = async () => {
        try {
          // Axios를 사용하여 서버에서 프로젝트 목록 가져오기
          const response = await axios.post(
            `${
              import.meta.env.VITE_API_ENDPOINT
            }/api/single_information_project?projectId=${projectId}`,
            { projectId },
          )
          if (response.status === 200) {
            // 가져온 프로젝트 목록을 설정

            form.setFieldsValue({
              projectTitle: response.data.projectInfo.projectTitle,
              projectStatus: '진행 중',
              status: '모집 중',
              recruitmentCount: 10,
              //
            })
          } else {
          }
        } catch (error) {
          // 오류 처리
          console.error('Error fetching project list:', error)
        }
      }

      // 초기 렌더링 시 데이터 가져오기
      fetchData()
    }
  }, [currentURL])

  const onFinish = async (values: any) => {
    try {
      localStorage.setItem('userId', values.userId)

      const thumbnailFile = fileList[0].originFileObj as Blob

      const formData = new FormData()

      console.log('textEditor', textEditor)

      if (techstacks !== null) {
        const selectedTechStacks = JSON.parse(techstacks)

        if (type === 'generate') {
          formData.append(
            'project',
            JSON.stringify({
              projectTitle: values.projectTitle,
              userId: values.userId,
              description: textEditor,
              recruitmentCount: values.recruitmentCount,
              projectStatus: values.projectStatus,
              status: values.status,
            }),
          )
          formData.append('thumbnail', thumbnailFile)
          formData.append(
            'techId',
            selectedTechStacks.map((tech: { id: any }) => tech.id).join(','),
          )

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
              projectStatus: values.projectStatus,
              status: values.status,
            }),
          )
          formData.append('thumbnail', thumbnailFile)
          formData.append(
            'techId',
            selectedTechStacks.map((tech: { id: any }) => tech.id).join(','),
          )

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

          console.log('edit finish')
        }
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

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`)
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
            <Input value={initialValue.projectTitle} />
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
          <Form.Item
            name="projectStatus"
            label="진행 상태"
            rules={[{ required: true, message: '진행 상태를 입력해주세요' }]}
          >
            <Select onChange={handleChange} options={projectStatus}></Select>
          </Form.Item>
          <Form.Item
            name="status"
            label="모집 상태"
            rules={[{ required: true, message: '모집 상태를 입력해주세요' }]}
          >
            <Select onChange={handleChange} options={status}></Select>
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
              {fileList.length < 1 && (
                <Button icon={<UploadOutlined />}>Click to Image Upload</Button>
              )}
            </Upload>
          </Form.Item>
          <Form.Item
            name="techNames"
            label="기술 스택"
            rules={[{ required: true, message: '기술 스택을 입력해주세요' }]}
          >
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="기술 스택"
              onChange={handleChange}
              optionLabelProp="label"
            >
              {techstacks &&
                JSON.parse(techstacks)?.map((tech: any, index: number) => (
                  <Option key={'tag_' + index} value={tech.techName}>
                    {tech.techName}
                  </Option>
                ))}
            </Select>
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
