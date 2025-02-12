import React from "react";
import Footer from "../Components/Footer.js";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const StaffLogin = () => {
  return (
    <>
      <div className="pages">
      <Link to="/">
          <img src={Logo}  alt="logo" className="logo" height="400" /> 
          </Link>
      </div>
      <Footer />
    </>
  );
};
export default StaffLogin;
