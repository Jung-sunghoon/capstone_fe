import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 로그인 API 응답 데이터에 대한 TypeScript 인터페이스를 정의합니다.
// interface LoginResponse {
//   token: string;
//   userId: string;
//   // 필요한 다른 응답 데이터도 여기에 추가할 수 있습니다.
// }

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

  return (
    <div>
      <h2>로그인</h2>
      <div>
        <label htmlFor="username">사용자 이름:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>로그인</button>
      <p>{message}</p>
    </div>
  );
};

export default Login;
