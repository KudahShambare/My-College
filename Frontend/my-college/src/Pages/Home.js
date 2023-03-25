//IMPORT npm modules

import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

//import local modules

import IBM from "../Images/IBM.jpeg";
import UN from "../Images/UN.jpeg";
import UWC from "../Images/UWC.jpg";
import UZ from "../Images/UZ.png";
import Logo from "../Images/logo.png";
import eLearn from "../Images/eLearn.jpg";
import Footer from "../Components/Footer.js";
import HamburgerIcon from "../Components/Hamburger";




const Home = () => {
   return(

<>
    <main className="pages">

    <div id="welcome">

    <HamburgerIcon/>

    <h1> Kuda University</h1>
  
    <img src={eLearn} alt="E-learning" id="elearn"/>
   <h4 className="captions"> Number 1 e-School in Africa  </h4>
 

    </div>

    <div id="about-us">
<h2> About Us </h2>

<p>
Kuda University is an accredited online higher education institution. Our programmes are grouped into 5 faculties namely: Information Technology, Social Sciences, Business and Commerce , Media and Arts and Law. All our qulifications are globally recognised. Our head office is in Zimbabwe but we enroll students fromm 20 African countries. 
</p>

<h3> Why study with us? </h3>

<ul>

<li> Self-paced learning </li>
<li> Course available in 20+ languages </li>
<li>100% online, no accomodation costs </li>
<li> 40% cheaper than traditional universities </li>
<li> Our syllabus is regularly updated to meet new industry trends </li>


</ul>

    </div>

<button id="join"> Join Us Today! </button>
    

    <h3> Our Partners </h3>

    <ul id="partners">

<li><img className="single-partner" src={UWC} alt="UWC" /> </li>
<li><img className="single-partner" src={UZ} alt="UZ" /> </li>
<li><img className="single-partner" src={IBM} alt="IBM" /> </li>
<li><img className="single-partner" src={UN} alt="UN" /> </li>


    </ul>



     
     </main>
      <Footer/>
    </>

      ) 

  
};
export default Home;
