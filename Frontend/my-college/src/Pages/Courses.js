import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Courses = () => {

  return (
    <>
      <div className="pages">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" height="400" />
        </Link>
        <h1>Courses</h1>
        <ul>
=       
        </ul>
      </div>
      <Footer />
    </>
  );
};
export default Courses;
