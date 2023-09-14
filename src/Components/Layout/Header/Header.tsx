import React from "react";
import "./header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="header__inner">
        <div className="header__logo">로고 자리 입니다.</div>
        <div className="header__nav">
          <ul>
            <li><Link to="/service-info" className="h__link">서비스 소개</Link></li>
            <li><Link to="/login" className="h__link">로그인</Link></li>
            <li><Link to="/sign-in" className="h__link">회원가입</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;