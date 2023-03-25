import React from "react";
import Footer from "../Components/Footer.js";
import { Link } from "react-router-dom";

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
