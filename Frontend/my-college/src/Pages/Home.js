//IMPORT npm modules

import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

//import local modules

import eLearn from "../assets/eLearn.jpg"
import Footer from "../Components/Footer.js";
import HamburgerIcon from "../Components/Hamburger";
import About from "../Components/HomeComponents.js/About.js";
import Partners from "../Components/HomeComponents.js/Partners.js";

const Home = () => {
  return (
    <>
      <main className="pages">
        <div id="welcome">
          <HamburgerIcon />

          <h1> Aduk Online School</h1>

          <img src={eLearn} alt="E-learning" id="elearn" />
          <h4 className="captions"> Number 1 e-School in Africa </h4>
        </div>

        <About />
        <Link to="/enrollments">
        <button id="join"> Enrollments </button>

        </Link>

        <Partners />
      </main>
      <Footer />
    </>
  );
};
export default Home;
