import React, { useState, ChangeEvent, FormEvent, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'
import { Button, Divider, Input, InputRef, Select, Space, message } from 'antd'
import {
  CheckOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  PlusOutlined,
} from '@ant-design/icons'

interface UserData {
  userId: string
  password: string
  name: string
  department: string
  studentNumber: number | undefined
  nickname: string
  email: string
  gitAddress: string
  techStacks: string
}

const SignUp: React.FC = () => {
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage()
  const [isUserIdChecked, setIsUserIdChecked] = useState<boolean>(false)
  const [isNicknameChecked, setIsNicknameChecked] = useState<boolean>(false)
  const [isStudentNumberChecked, setIsStudentNumberChecked] =
    useState<boolean>(false)

  const [userData, setUserData] = useState<UserData>({
    userId: '',
    password: '',
    name: '',
    department: '',
    studentNumber: undefined,
    nickname: '',
    email: '',
    gitAddress: '',
    techStacks: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  //아이디 중복체크
  const handleUserIdCheck = async () => {
    if (!userData.userId) {
      messageApi.error('아이디를 입력하세요.')
      return
    }

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/api/id_duplicate_check`,
        {
          params: { id: userData.userId },
        },
      )

      if (response.status === 200) {
        setIsUserIdChecked(true)
        messageApi.success('사용 가능한 아이디입니다.')
      }
    } catch {
      setIsUserIdChecked(false)
      messageApi.error('이미 사용 중인 아이디입니다.')
    }
  }

  //닉네임 중복체크 api
  const handleNicknameCheck = async () => {
    if (!userData.nickname) {
      messageApi.error('닉네임을 입력하세요.')
      return
    }

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/api/nick_name_duplicate_check`,
        {
          params: {
            nickName: userData.nickname,
          },
        },
      )

      if (response.status === 200) {
        setIsNicknameChecked(true)
        messageApi.success('사용 가능한 닉네임입니다.')
      }
    } catch {
      setIsNicknameChecked(false)
      messageApi.error('이미 사용 중인 닉네임입니다.')
    }
  }

  const handleStudentNumberCheck = async () => {
    if (!userData.studentNumber) {
      messageApi.error('학번을 입력하세요.')
      return
    }

    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_ENDPOINT
        }/api/studentNumber_duplicate_check`,
        {
          params: {
            studentNumber: userData?.studentNumber,
          },
        },
      )

      if (response.status === 200) {
        setIsStudentNumberChecked(true)
        messageApi.success('사용 가능한 학번입니다.')
      }
    } catch {
      setIsStudentNumberChecked(false)
      messageApi.error('이미 사용 중인 학번입니다.')
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isUserIdChecked) {
      messageApi.error('아이디 중복을 확인하세요.')
      return
    }

    if (!isNicknameChecked) {
      messageApi.error('닉네임 중복을 확인하세요.')
      return
    }

    if (!isStudentNumberChecked) {
      messageApi.error('학번 중복을 확인하세요.')
      return
    }

    // 필요한 정보가 입력되었는지 검증
    if (
      !userData.userId ||
      !userData.password ||
      !userData.name ||
      !userData.nickname ||
      !userData.email ||
      !userData.gitAddress ||
      !userData.department ||
      !userData.studentNumber
    ) {
      messageApi.error('모든 회원 정보를 입력하세요.')
      return // 필요한 정보가 입력되지 않았을 경우 회원가입 중단
    }

    try {
      // 회원가입 API 호출
      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/sign_up`,
        userData,
      )

      // 회원가입 성공 시 처리
      console.log('회원가입 성공:', response.data)
      navigate('/login')
    } catch (error) {
      // 회원가입 실패 시 처리
      console.error('회원가입 오류:', error)
    }
  }

  const [items, setItems] = useState<any>([])
  const [name, setName] = useState('')
  const inputRef = useRef<InputRef>(null)
  let index = 0

  const addItem = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    e.preventDefault()
    setItems([...items, name || `New item ${index++}`])
    setName('')
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleTagChange = (value: string[]) => {
    // 선택한 기술 스택을 띄어쓰기로 구분하여 문자열로 저장
    const techStacksString = value.join(' ')
    setUserData({ ...userData, techStacks: techStacksString })
  }

  return (
    <div style={{ marginTop: '90px' }}>
      {contextHolder}
      <form onSubmit={handleSubmit} className="Signup__form">
        <div className="Signup__form_div">
          <div className="Signup__duplicate">
            <label>아이디</label>
            <div>
              {isUserIdChecked ? (
                <CheckOutlined style={{ color: 'green', marginLeft: '5px' }} />
              ) : null}
            </div>
          </div>
          <div className="su__container">
            <Space direction="horizontal">
              <Input
                placeholder="아이디를 입력하시오"
                type="text"
                name="userId"
                className="Su__t__box"
                value={userData.userId}
                onChange={handleChange}
              />
              <Button onClick={handleUserIdCheck} style={{ width: 80 }}>
                중복확인
              </Button>
            </Space>
          </div>
        </div>
        <div className="Signup__form_div">
          <label>비밀번호</label>
          <Input.Password
            placeholder="비밀번호를 입력하시오"
            name="password"
            className="Su__t__box"
            value={userData.password}
            onChange={handleChange}
            iconRender={visible =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>
        <div className="Signup__form_div">
          <label>이름</label>
          <Input
            placeholder="이름을 입력하시오"
            type="text"
            name="name"
            className="Su__t__box"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div className="Signup__form_div">
          <div className="Signup__duplicate">
            <label>닉네임</label>
            <div>
              {isNicknameChecked ? (
                <CheckOutlined style={{ color: 'green', marginLeft: '5px' }} />
              ) : null}
            </div>
          </div>
          <div className="su__container">
            <Space direction="horizontal">
              <Input
                placeholder="닉네임을 입력하시오"
                type="text"
                name="nickname"
                className="Su__t__box"
                value={userData.nickname}
                onChange={handleChange}
              />
              <Button onClick={handleNicknameCheck} style={{ width: 80 }}>
                중복확인
              </Button>
            </Space>
          </div>
        </div>
        <div className="Signup__form_div">
          <label>이메일</label>
          <Input
            placeholder="이메일을 입력하시오"
            type="email"
            name="email"
            className="Su__t__box"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className="Signup__form_div">
          <label>학과</label>
          <Input
            placeholder="학과를 입력하시오"
            type="text"
            name="department"
            className="Su__t__box"
            value={userData.department}
            onChange={handleChange}
          />
        </div>
        <div className="Signup__form_div">
          <div className="Signup__duplicate">
            <label>학번</label>
            <div>
              {isStudentNumberChecked ? (
                <CheckOutlined style={{ color: 'green', marginLeft: '5px' }} />
              ) : null}
            </div>
          </div>
          <div className="su__container">
            <Space direction="horizontal">
              <Input
                placeholder="학번을 입력하시오"
                type="text"
                name="studentNumber"
                className="Su__t__box"
                value={userData.studentNumber}
                onChange={handleChange}
              />
              <Button onClick={handleStudentNumberCheck} style={{ width: 80 }}>
                중복확인
              </Button>
            </Space>
          </div>
        </div>
        <div className="Signup__form_div">
          <label>Git 주소</label>
          <Input
            placeholder="Git 주소를 입력하시오"
            type="text"
            name="gitAddress"
            className="Su__t__box"
            value={userData.gitAddress}
            onChange={handleChange}
          />
        </div>
        <div className="Signup__form_div">
          <label>기술 스택</label>
          <Select
            className="Su__t__box"
            mode="multiple"
            style={{ width: '400px' }}
            onChange={handleTagChange}
            dropdownRender={menu => (
              <>
                {menu}
                <Divider style={{ margin: '8px 0' }} />
                <Space style={{ padding: '0 8px 4px' }}>
                  <Input
                    placeholder="Please enter item"
                    ref={inputRef}
                    value={name}
                    onChange={onNameChange}
                    onKeyDown={e => e.stopPropagation()}
                  />
                  <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                    스택 추가
                  </Button>
                </Space>
              </>
            )}
            options={items.map((item: any) => ({
              label: item,
              value: item,
            }))}
          ></Select>
        </div>
        <Button type="primary" htmlType="submit" className="Signup__btn">
          회원가입
        </Button>
      </form>
    </div>
  )
}

export default SignUp
