import React from "react";
import Footer from "../Components/Footer.js";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../Images/College.png";
const Home = () => {
  return (
    <>
      <div id="home">
        {/*Desktop home page*/}
        <section className="homeTop">
          <Link to="/">
          <img src={Logo}  alt="logo" className="logo" height="400" /> 
          </Link>
           <h1 >Welcome To The Fake College</h1>
  
 <section id="logInNav">
 <Link to="/login">
     <FaRegUserCircle  style={{fontSize:'5rem', marginLeft:'50%',Color:'black'}}/>
    <h2 style={{fontSize:'2rem', marginLeft:'50%',marginTop:'0px'}}>Log In</h2>
     </Link>
       </section>
 
        </section>
        {/* Mobile Home*/}
     <section id="mobileHomeTop">

     <Link to="/" >
          <img src={Logo}  alt="logo" className="logo" height="400" style={{marginRight:"45%"}}/> 
          </Link>
  
 <section  id="mobileLogInNav" >
 <Link to="/login" >
     <FaRegUserCircle  style={{fontSize:'3rem',Color:'black'}}/>
    <h2 style={{fontSize:'1rem',marginTop:'0%'}}>Log In</h2>
     </Link>
       </section>
       <h1 id="homeWelcomeMobile">Welcome To The Fake College</h1>


     </section>
    {/* Home Buttons Big Screen*/}
        <section className="navButtons">
       <Link to="/courses"> 
       <button> View Our Courses </button>
       </Link>
       <Link to="/enrollments"> 
       <button> Get Enrolled Today </button>

       </Link>


        </section>
        {/* Home Buttons Mobile*/}
        <section id="mobileNavButtons">
       <Link to="/courses"> 
       <button> View Our Courses </button>
       </Link>
       <Link to="/enrollments"> 
       <button> Get Enrolled Today </button>

       </Link>


        </section>
      </div>
      <Footer />
    </>
  );
};
export default Home;
