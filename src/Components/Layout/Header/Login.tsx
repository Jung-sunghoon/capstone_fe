import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    // Swagger에서 생성된 로그인 API 엔드포인트 URL을 입력하세요.
    const apiUrl = "http://localhost:8080/api/login";

    try {
      // Axios를 사용하여 API를 호출하고 응답을 받습니다.
      const response = await axios.post(apiUrl, {
        userId: username,
        password,
      });

      // 로그인 성공 시 처리
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
      <form onSubmit={handleSubmit}>
        <div className="input__box">
          <input
            type="text"
            id="username"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="username">아이디</label>
        </div>
        <div className="input__box">
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">비밀번호</label>
        </div>
        <input type="submit" onClick={handleLogin} value={"로그인"} />
      </form>
      <p className="error__m">{message}</p>
    </div>
  );
};

export default Login;
