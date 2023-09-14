import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Login from "./Components/Layout/Header/Login";
import SignIn from "./Components/Layout/Header/SignIn";
import ServiceInfo from "./Components//Layout/Header/ServiceInfo";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Login/*" element={<Login />} />
        <Route path="/SignIn/*" element={<SignIn />} />
        <Route path="/ServiceInfo/*" element={<ServiceInfo />} />
      </Routes>
    </Router>
  )
}

export default AppRouter;
