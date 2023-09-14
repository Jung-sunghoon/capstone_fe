import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Login from "./Components/Layout/Header/Login";
import SignUp from "./Components/Layout/Header/SignUp";
import ServiceInfo from "./Components//Layout/Header/ServiceInfo";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login/*" element={<Login />} />
        <Route path="/sign-up/*" element={<SignUp />} />
        <Route path="/service-info/*" element={<ServiceInfo />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
