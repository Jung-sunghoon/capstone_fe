import React, { useState, useEffect, useRef } from 'react'
import {
  Form,
  Input,
  Button,
  message,
  Upload,
  InputNumber,
  Select,
  Divider,
  Space,
  InputRef,
} from 'antd'
import axios from 'axios'
import TextEditor from '@src/Components/TextEditor'
import { useNavigate } from 'react-router-dom'
import { PlusOutlined, UploadOutlined } from '@ant-design/icons'
import type { UploadFile, UploadProps } from 'antd/es/upload/interface'

type ProjectStatusType = { label: string; value: string }
type StatusType = { label: string; value: string }
type TechstackType = { techId: number; techName: string }

const { Option } = Select

const Generate: React.FC = () => {
  const [form] = Form.useForm()
  const [initialValue] = useState({
    projectTitle: '',
    projectStatus: 'Ps_pr',
    status: 'S_pr',
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
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const projectStatus: ProjectStatusType[] = [
    { label: '진행 중', value: 'Ps_pr' },
    { label: '프로젝트 공유', value: 'Ps_co' },
  ]
  const status: StatusType[] = [
    { label: '모집 중', value: 'S_pr' },
    { label: '모집 완료', value: 'S_co' },
  ]

  // 컴포넌트가 마운트될 때와 URL이 변경될 때 데이터를 가져오기 위한 useEffect
  // type 별로 실행 되기 위한 분기
  useEffect(() => {
    const savedUserId = localStorage.getItem('userId')
    if (savedUserId) {
      form.setFieldsValue({ userId: savedUserId })
    }

    if (currentURL.includes('/generate')) {
      setType('generate')
    } else if (currentURL.includes(`/edit/${projectId}`)) {
      setType('edit')
      fetchProjectData()
    }
  }, [currentURL])

  // 프로젝트 디테일 정보 데이터를 가져오는 함수
  const fetchProjectData = async () => {
    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_API_ENDPOINT
        }/api/single_information_project?projectId=${projectId}`,
        { projectId },
      )

      // 정상으로 가져옴
      if (response.status === 200) {
        const projectInfo = response?.data
        const techIds = response?.data?.techIds

        console.log(
          'tech',
          techIds,
          techstacks &&
            JSON.parse(techstacks)
              .filter((item: TechstackType) => techIds?.includes(item.techId))
              .map((tech: TechstackType) => tech.techName),
        )

        form.setFieldsValue({
          projectTitle: projectInfo.projectTitle,
          projectStatus: projectInfo.projectStatus,
          status: projectInfo.status,
          recruitmentCount: projectInfo.recruitmentCount,
          techIds:
            techstacks &&
            JSON.parse(techstacks)
              .filter((item: TechstackType) => techIds?.includes(item.techId))
              .map((tech: TechstackType) => tech.techName),
          description: projectInfo.description,
        })
        setTextEditor(projectInfo.description)
      }
    } catch (error) {
      console.error('Error fetching project list:', error)
    }
  }

  // 프로젝트를 생성하거나 업데이트하는 함수
  // type 별로 실행 되기 위한 분기
  const createOrUpdateProject = async (
    type: 'generate' | 'edit',
    values: any,
    textEditor: string,
    techstacks: any,
    fileList: any,
  ) => {
    console.log('values', values)

    console.log('fileList', fileList, fileList[0]?.thumbUrl)
    const requestData = {
      projectId: type === 'edit' ? projectId : null,
      projectTitle: values.projectTitle,
      description: textEditor,
      userId: values.userId,
      projectStatus: values.projectStatus,
      recruitmentCount: values.recruitmentCount,
      status: values.status,
      thumbnail: fileList && fileList[0]?.thumbUrl,
      techIds: JSON.parse(techstacks)
        ?.filter((item: any) => values?.techIds.includes(item.techName))
        .map((tech: any) => tech.techId),
    }

    const response = await axios.post(
      `${import.meta.env.VITE_API_ENDPOINT}/api/generate_project`,
      requestData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return response
  }

  // Form 제출 시 실행되는 콜백 함수
  const onFinish = async (values: any) => {
    try {
      if (type !== 'generate' && type !== 'edit') return

      if (type === 'generate') {
        localStorage.setItem('userId', values.userId)
      }

      const response = await createOrUpdateProject(
        type,
        values,
        textEditor,
        techstacks,
        fileList,
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

  // 업로드 변경 시 실행되는 콜백 함수
  const onChange: UploadProps['onChange'] = async ({
    fileList: newFileList,
  }) => {
    console.log('newFileList', newFileList)
    setFileList(newFileList)
  }

  // Select 변경 시 실행되는 콜백 함수
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`)
  }

  const [techstacksVersion, setTechstacksVersion] = useState(0)
  const [items, setItems] = useState<any>([])
  const [name, setName] = useState('')
  const inputRef = useRef<InputRef>(null)
  let index = 8

  const addItem = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    e.preventDefault()

    const newItem = name || `New item ${index++}`

    if (!items.includes(newItem)) {
      setItems([...items, newItem || `New item ${index++}`])

      // techIds에 이미 존재하는지 확인
      const techIds = JSON.parse(techstacks || '[]')?.map(
        (tech: any) => tech.techName,
      )

      if (!techIds.includes(newItem)) {
        // Update techstacks in localStorage
        const updatedTechstacks = JSON.parse(techstacks || '[]')
        updatedTechstacks.push({ techId: index, techName: newItem })
        localStorage.setItem('techstacks', JSON.stringify(updatedTechstacks))

        // 기술스택 업데이트
        setTechstacksVersion(prev => prev + 1)
      }
    } else {
      // 이미 존재하는 경우 메시지 출력
      messageApi.error('이미 존재하는 기술 스택입니다.')
    }
    setName('')
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
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
            name="techIds"
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
              dropdownRender={menu => (
                <>
                  {menu}
                  <Divider style={{ margin: '8px 0' }} />
                  <Space
                    style={{
                      display: 'flex',
                      padding: '0 8px 4px',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Input
                      placeholder="기술 스택을 추가하세요"
                      ref={inputRef}
                      value={name}
                      onChange={onNameChange}
                      onKeyDown={e => e.stopPropagation()}
                      style={{ width: '300px' }}
                    />
                    <Button
                      type="text"
                      icon={<PlusOutlined />}
                      onClick={addItem}
                    >
                      스택 추가
                    </Button>
                  </Space>
                </>
              )}
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
                  isNew={true}
                  setTextEditor={setTextEditor}
                  html={''}
                />
              ) : (
                <TextEditor
                  isNew={false}
                  setTextEditor={setTextEditor}
                  html={textEditor}
                />
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
