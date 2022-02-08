import React from "react";
import Footer from "../Components/Footer.js";
import { Link } from "react-router-dom";
import Logo from "../Images/College.png";
import FormCard from "../Components/FormCard"

const StaffLogin = () => {
  return (
    <>
      <div className="pages">
      <Link to="/">
          <img src={Logo}  alt="logo" className="logo" height="400" /> 
          </Link>
          <FormCard status="Staff" videoUrl="https://www.youtube.com/watch?v=0JbeJgcRPMM"/>
      </div>
      <Footer />
    </>
  );
};
export default StaffLogin;
