import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import { useAuth } from "../../../AuthContext"; // useAuth 추가

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login }: any = useAuth(); // useAuth를 통해 로그인 함수에 접근

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    // Swagger에서 생성된 로그인 API 엔드포인트 URL을 입력하세요.
    const apiUrl = "http://localhost:8080/api/login";

    try {
      // Axios를 사용하여 API를 호출하고 응답을 받습니다.
      const response = await axios.post(apiUrl, {
        userId,
        password,
      });

      // 로그인 성공 시 처리
      login(); // 로그인 함수 호출
      navigate("/service-info");
    } catch (error) {
      // 로그인 실패 시 처리
      console.error("로그인 오류:", error);
      setMessage("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="login__form">
        <img src={Logo} alt="로고 이미지" className="logo__img"></img>
        <div className="input__box">
          <input
            type="text"
            id="userId"
            placeholder="아이디"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <label htmlFor="userId" className="log_label">
            아이디
          </label>
        </div>
        <div className="input__box">
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password" className="log_label">
            비밀번호
          </label>
        </div>
        <p className="error__m">{message}</p>
        <input
          type="submit"
          onClick={handleLogin}
          value={"로그인"}
          className="login__btn"
        />
        <div className="login__sign__up">
          계정이 없으신가요?{" "}
          <Link to="/sign-up" className="signup__link">
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
