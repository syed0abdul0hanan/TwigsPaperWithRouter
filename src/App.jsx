import React from "react";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Login from "./authentication/login/Login";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </Layout>
  );
}

export default App;
