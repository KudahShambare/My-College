import React from "react";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import Logo from "../Images/College.png";
import { useHistory } from "react-router-dom";

const StudentDashboard=(props)=>{
  const history=useHistory();
  const location= useLocation();

  const logout=()=>{
    history.push("/StudentDashboard",{profileName:" User, you have been logged out."});

    //location.reload();
  }

    return(
        
        <><div className="pages">

        <section className="homeTop">
          <Link to="/">
            <img src={Logo} alt="logo" className="logo" height="400" />
          </Link>
         

        <h1>Hello {location.state.profileName} </h1>

<section className="logout" onClick={logout}>
<FaRegUserCircle style={{ fontSize: '5rem', marginLeft: '50%', Color: 'black' }} />
          <h2 style={{ fontSize: '2rem', marginLeft: '50%', marginTop: '0px' }}>Log 0ut</h2>

</section>

         

        </section>

      </div><Footer /></>
    
    )
}
export default StudentDashboard;