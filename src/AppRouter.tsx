import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Login from "./Components/Layout/Header/Login";
import SignUp from "./Components/Layout/Header/SignUp";
import ServiceInfo from "./Components//Layout/Header/ServiceInfo";
import Board from "./Components/Board/Board";
import Generate from "./Components/Board/Generate";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login/*" element={<Login />} />
        <Route path="/sign-up/*" element={<SignUp />} />
        <Route path="/service-info/*" element={<ServiceInfo />} />
        <Route path="/board/*" element={<Board />} />
        <Route path="/generate/*" element={<Generate />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
