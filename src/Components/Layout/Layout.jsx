import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
const Layout = ({ userData,setUserData }) => {
  



  return (
    <>
      <Navbar/>
      <div className="container">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
