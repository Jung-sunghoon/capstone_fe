import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './login.css'
import { Link } from 'react-router-dom'
import Logo from './logo.png'
import { useAuth } from '../../../AuthContext'
import { Input } from 'antd'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { login }: { login: () => void } = useAuth()

  const [userId, setUserId] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleLogin = async () => {
    const apiUrl = 'http://localhost:8080/api/login'

    if (!userId || !password) {
      setMessage('아이디와 비밀번호를 입력하세요.')
      return
    }

    try {
      const response = await axios.post(apiUrl, {
        userId,
        password,
      })

      if (response.status === 200) {
        // 로그인 성공 시
        localStorage.setItem('userId', userId) // userId를 로컬 스토리지에 저장
        login()
        navigate('/service-info')
      } else {
        // 로그인 실패 시
        console.error('로그인 오류: 로그인 실패')
        setMessage('아이디 또는 비밀번호가 잘못되었습니다.')
      }
    } catch (error) {
      // 로그인 요청 오류 시
      console.error('로그인 오류:', error)
      setMessage('로그인 중 오류가 발생했습니다.')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleLogin()
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="login__form">
        <img src={Logo} alt="로고 이미지" className="logo__img"></img>
        <div className="input__box">
          <Input
            type="text"
            id="userId"
            placeholder="아이디"
            value={userId}
            onChange={e => setUserId(e.target.value)}
          />
        </div>
        <div className="input__box">
          <Input
            type="password"
            id="password"
            placeholder="비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <p className="error__m">{message}</p>
        <input
          type="submit"
          onClick={handleLogin}
          value={'로그인'}
          className="login__btn"
        />
        <div className="login__sign__up">
          계정이 없으신가요?{' '}
          <Link to="/sign-up" className="signup__link">
            회원가입
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login
