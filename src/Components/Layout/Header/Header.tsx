import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import { useAuth } from "../../../AuthContext"; // useAuth 추가

const Header = () => {
  const { isLoggedIn, logout, logoutMessage }: any = useAuth(); // isLoggedIn, logout 및 logoutMessage 추가

  return (
    <header id="header">
      <div className="header__inner">
        <div className="header__logo">
          <Link to="/board">
            <img src={Logo} alt="로고 이미지" className="h__logo__img"></img>
          </Link>
        </div>
        <div className="header__nav">
          <ul>
            <li>
              <Link to="/service-info" className="h__link">
                서비스 소개
              </Link>
            </li>
            <li>
              {isLoggedIn ? (
                <button onClick={logout} className="logout__btn">
                  <Link to="/service-info" className="h__link">
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
  );
};

export default Header;
