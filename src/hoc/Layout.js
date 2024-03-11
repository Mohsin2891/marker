// Layout.js
import React from "react";
import { Navbar } from "components/Navbar";
import Footer from "components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
