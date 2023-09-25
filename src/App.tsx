import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import SignUp from "./Components/Layout/Header/SignUp";
import ServiceInfo from "./Components/Layout/Header/ServiceInfo";
import Login from "./Components/Layout/Header/Login";
import Board from "./Components/Board/Board";
import { AuthProvider } from "./AuthContext"; // AuthProvider 추가
import Generate from "./Components/Board/Generate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/login/*" element={<Login />} />
          <Route path="/sign-up/*" element={<SignUp />} />
          <Route path="/service-info/*" element={<ServiceInfo />} />
          <Route path="/board/*" element={<Board />} />
          <Route path="/generate/*" element={<Generate />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
