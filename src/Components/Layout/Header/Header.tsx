import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import Logo from '@assets/images/Login/logo.png'
import { useAuth } from '../../../AuthContext'

const Header: React.FC = () => {
  const { isLoggedIn, logout }: { isLoggedIn: boolean; logout: () => void } =
    useAuth()

  return (
    <header id="header">
      <div className="header__inner">
        <div className="header__logo">
          <Link to="/projects">
            <img src={Logo} alt="로고 이미지" className="h__logo__img"></img>
          </Link>
        </div>
        <div className="header__nav">
          <ul>
            <li>
              <Link to="/projects" className="h__link">
                프로젝트
              </Link>
            </li>
            <li>
              <Link to="/profile" className="h__link">
                프로필
              </Link>
            </li>
            <li>
              <Link to="/ranking" className="h__link">
                랭킹
              </Link>
            </li>
            <li>
              {isLoggedIn ? (
                <button onClick={logout} className="logout__btn">
                  <Link to="/login" className="h__link">
                    로그아웃
                  </Link>
                </button>
              ) : (
                <Link to="/login" className="h__link">
                  로그인
                </Link>
              )}
            </li>
            <li>
              <Link to="/sign-up" className="h__link">
                회원가입
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
