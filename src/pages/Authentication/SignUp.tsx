import React, { useState, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'
import { Button, Input, Space } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

interface UserData {
  userId: string
  password: string
  name: string
  nickname: string
  email: string
  gitAddress: string
}

const SignUp: React.FC = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState<string>('')

  const [userData, setUserData] = useState<UserData>({
    userId: '',
    password: '',
    name: '',
    nickname: '',
    email: '',
    gitAddress: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 필요한 정보가 입력되었는지 검증
    if (
      !userData.userId ||
      !userData.password ||
      !userData.name ||
      !userData.nickname ||
      !userData.email ||
      !userData.gitAddress
    ) {
      setMessage('모든 회원 정보를 입력하세요.')
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

  return (
    <div>
      <form onSubmit={handleSubmit} className="Signup__form">
        <div className="Signup__form_div">
          <label>아이디</label>
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
              <Button style={{ width: 80 }}>중복확인</Button>
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
          <label>닉네임</label>
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
              <Button style={{ width: 80 }}>중복확인</Button>
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
        <p className="error__m">{message}</p>
        <Button type="primary" htmlType="submit" className="Signup__btn">
          회원가입
        </Button>
      </form>
    </div>
  )
}

export default SignUp
