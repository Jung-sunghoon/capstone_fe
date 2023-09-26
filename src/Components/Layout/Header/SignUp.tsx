import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");

  const [userData, setUserData] = useState({
    userId: "",
    password: "",
    name: "",
    nickname: "",
    email: "",
    gitAddress: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // 필요한 정보가 입력되었는지 검증
    if (
      !userData.userId ||
      !userData.password ||
      !userData.name ||
      !userData.nickname ||
      !userData.email ||
      !userData.gitAddress
    ) {
      setMessage("모든 회원 정보를 입력하세요.");
      return; // 필요한 정보가 입력되지 않았을 경우 회원가입 중단
    }

    try {
      // 회원가입 API 호출
      const response = await axios.post(
        "http://localhost:8080/api/sign_up",
        userData
      );

      // 회원가입 성공 시 처리
      console.log("회원가입 성공:", response.data);
      navigate("/login");
    } catch (error) {
      // 회원가입 실패 시 처리
      console.error("회원가입 오류:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="Signup__form">
        <div>
          <label>아이디</label>
          <input
            type="text"
            name="userId"
            className="Su__t__box"
            value={userData.userId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            className="Su__t__box"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>이름</label>
          <input
            type="text"
            name="name"
            className="Su__t__box"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>닉네임</label>
          <input
            type="text"
            name="nickname"
            className="Su__t__box"
            value={userData.nickname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>이메일</label>
          <input
            type="email"
            name="email"
            className="Su__t__box"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Git 주소</label>
          <input
            type="text"
            name="gitAddress"
            className="Su__t__box"
            value={userData.gitAddress}
            onChange={handleChange}
          />
        </div>
        <p className="error__m">{message}</p>
        <button type="submit" className="Signup__btn">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUp;
