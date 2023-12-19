import React, { useState, useEffect } from 'react'
import { Form, Input, Button, message } from 'antd'
import axios from 'axios'
import TextEditor from '@src/Components/TextEditor'
import { useNavigate } from 'react-router-dom'
import { FormOutlined } from '@ant-design/icons'

const InfoGenerate: React.FC = () => {
  const [editButton, setEditButton] = useState(false)
  const [form] = Form.useForm()
  const [initialValue] = useState({
    title: '',
    description: '',
  })
  const [messageApi, contextHolder] = message.useMessage()
  const [textEditor, setTextEditor] = useState('')
  const [type, setType] = useState<string>('')
  const navigate = useNavigate()
  const currentURL = window.location.href
  const segments = currentURL.split('/')
  const itInfoId = segments[segments.length - 1]

  // 컴포넌트가 마운트될 때와 URL이 변경될 때 데이터를 가져오기 위한 useEffect
  // type 별로 실행 되기 위한 분기
  useEffect(() => {
    if (currentURL.includes('/infogenerate')) {
      setType('generate')
    } else if (currentURL.includes(`/infoedit/${itInfoId}`)) {
      setType('edit')
      fetchItInfoData()
    }
  }, [currentURL])

  // 프로젝트 디테일 정보 데이터를 가져오는 함수
  const fetchItInfoData = async () => {
    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_API_ENDPOINT
        }/api/single_information_itInformation?itInfoId=${itInfoId}`,
        { itInfoId },
      )

      // 정상으로 가져옴
      if (response.status === 200) {
        const itInfo = response?.data

        form.setFieldsValue({
          title: itInfo.title,
          description: itInfo.description,
        })
        setTextEditor(itInfo.description)
      }
    } catch (error) {
      console.error('Error fetching project list:', error)
    }
  }

  // 프로젝트를 생성하거나 업데이트하는 함수
  // type 별로 실행 되기 위한 분기
  const createOrUpdateItInfo = async (
    type: 'generate' | 'edit',
    values: any,
    textEditor: string,
  ) => {
    const requestData = {
      itInfoId: type === 'edit' ? itInfoId : null,
      title: values.title,
      description: textEditor,
    }

    const response = await axios.post(
      `${import.meta.env.VITE_API_ENDPOINT}/api/generate_it_info`,
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

      const response = await createOrUpdateItInfo(type, values, textEditor)

      if (response.status === 200) {
        messageApi.success('IT 정보가 성공적으로 생성되었습니다.')
        form.resetFields()
        navigate('/info')
      } else {
        messageApi.error('IT 정보 생성 중 오류가 발생했습니다.')
      }
    } catch (error) {
      messageApi.error('IT 정보 생성 중 오류가 발생했습니다.')
      console.error('IT 정보 생성 중 오류:', error)
    }
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
            name="title"
            label="IT 정보 제목"
            rules={[{ required: true, message: 'it 정보 제목을 입력해주세요' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="IT 정보 내용">
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
                      수정 시 클릭
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
              {`IT 정보 ${type === 'generate' ? '생성' : '수정'}`}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}

export default InfoGenerate
