import React, { useState, useEffect } from 'react'
import { Form, Input, Button, message, Upload, InputNumber, Select } from 'antd'
import axios from 'axios'
import TextEditor from '@src/Components/TextEditor'
import { useNavigate } from 'react-router-dom'
import { FormOutlined, UploadOutlined } from '@ant-design/icons'
import type { UploadFile, UploadProps } from 'antd/es/upload/interface'
import { ProjectType } from '@src/types'

const { Option } = Select

const Generate: React.FC = () => {
  const [editButton, setEditButton] = useState(false)
  const [selectedTech, setSelectedTech] = useState([])
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

      // localStorage.setItem('description', description)

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
              projectStatus: response.data.projectInfo.projectStatus,
              status: response.data.projectInfo.status,
              recruitmentCount: response.data.projectInfo.recruitmentCount,
              techId:
                techstacks &&
                JSON.parse(techstacks)
                  ?.filter((item: any) =>
                    response.data.techId?.includes(item.techId),
                  )
                  .map((tech: any, index: number) => {
                    return tech.techName
                  }),

              description: response.data.projectInfo.description,
            })

            console.log(response.data.projectInfo.techId)
            console.log(response.data.projectInfo.description)
            setTextEditor(response.data.projectInfo.description)
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

      console.log('fileList', fileList)

      const thumbnailFile = fileList[0]?.originFileObj as Blob

      const formData = new FormData()

      console.log('textEditor', textEditor)

      if (techstacks !== null) {
        const selectedTechStacks = JSON.parse(techstacks)

        console.log('values', values)
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
            'techName',
            JSON.parse(techstacks)
              ?.filter((item: any) => values?.techId.includes(item.techId))
              .map((tech: any, index: number) => {
                return tech.techId
              }),
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
            'techName',
            JSON.parse(techstacks)
              ?.filter((item: any) => values?.techId.includes(item.techName))
              .map((tech: any, index: number) => {
                return tech.techId
              }),
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
            name="techId"
            label="기술 스택"
            rules={[{ required: true, message: '기술 스택을 입력해주세요' }]}
          >
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="기술 스택"
              onChange={handleChange}
              optionLabelProp="label"
              defaultValue={[]}
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
              {type === 'generate' ? (
                <TextEditor
                  isNew={false}
                  edit={true}
                  setTextEditor={setTextEditor}
                  html={''}
                />
              ) : (
                <div>
                  <div>
                    <Button
                      style={{
                        display: editButton ? 'none' : 'block',
                        marginBottom: '10px',
                      }}
                      onClick={() => {
                        setEditButton(true)
                      }}
                      icon={<FormOutlined />}
                    >
                      Click to Edit Description
                    </Button>
                  </div>
                  <TextEditor
                    isNew={false}
                    edit={editButton}
                    setTextEditor={setTextEditor}
                    html={textEditor}
                  />
                </div>
              )}
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
