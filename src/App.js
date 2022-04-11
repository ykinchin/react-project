import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";


const App = () => {
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about-us" element={<AboutPage/>} />
      <Route path="/menu" element={<MenuPage/>} />
      <Route path="/features" element={<FeaturesPage/>} />
      </Routes>
    </Layout>
  );
};

export default App;
