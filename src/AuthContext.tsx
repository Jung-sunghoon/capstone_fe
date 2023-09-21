// AuthContext.js 파일

import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logoutMessage, setLogoutMessage] = useState(""); // 로그아웃 메시지 상태 추가

  useEffect(() => {
    // 로컬 스토리지에서 로그인 상태를 가져옴
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    // 로그인 상태를 로컬 스토리지에 저장
    localStorage.setItem("isLoggedIn", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
    setLogoutMessage("로그아웃 되었습니다."); // 로그아웃 시 메시지 설정
    // 로그아웃 상태를 로컬 스토리지에서 삭제
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, logoutMessage }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    console.log("error");
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
