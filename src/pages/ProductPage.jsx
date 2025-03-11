import React from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import Content from "../components/Content";
import HoverPreview from "../components/HoverPreview";
import Sidebar from "../components/Sidebar";
import "../styles/productpage.css";
const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div id="product">
        <HoverPreview />
        <Content />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
