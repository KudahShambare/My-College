import React from "react";
import Footer from "../Components/Footer.js";
import { Link} from "react-router-dom";
import Logo from "../Images/logo.png";

const LogIn=()=>{
    return(
        <>
<div className="pages">
<Link to="/">
          <img src={Logo}  alt="logo" className="logo" height="400" /> 
          </Link>
<section className="navButtons">
       <Link to="/Stafflogin"> 
       <button> Staff Login </button>
       </Link>
       <Link to="/Studentlogin"> 
       <button> Student Login </button>

       </Link>


        </section>
        <Link to="/create-account" style={{textDecoration:"none"}}><span className="noAccount">Don't have an account?Click here.....</span></Link>

</div>
<Footer/>
</>
    )
}
export default LogIn;