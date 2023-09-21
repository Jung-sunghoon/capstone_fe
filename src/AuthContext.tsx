// AuthContext.js 파일

import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
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
