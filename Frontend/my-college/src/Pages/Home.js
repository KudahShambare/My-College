import React from "react";
import Footer from "../Components/Footer.js";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="home">
     <section id="loginNav">
     <FaRegUserCircle  style={{fontSize:'7rem'}}/>
        <span>Log In</span>
     </section>
     <h1>Welcome To The Fake College</h1>
        <section id="homeButtons">
       <Link to="/courses"> 
       <button> View Our Courses </button>

       
       </Link>

          <button> Get Enrolled Today </button>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Home;
