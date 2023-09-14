import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import SignUp from "./Components/Layout/Header/SignUp";
import ServiceInfo from "./Components/Layout/Header/ServiceInfo";
import Login from "./Components/Layout/Header/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/service-info" element={<ServiceInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
