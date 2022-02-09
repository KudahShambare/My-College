import React from "react";
import Footer from "../Components/Footer.js";
import { Link } from "react-router-dom";
import Logo from "../Images/College.png";

const CreateAccount = () => {
  return (
    <>
      <div className="pages">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" height="400" />
        </Link>
        <form id="createAccount">
          <h2>Create Account</h2>
          <section>
            <label>Username:</label>
            <input type="text" required />
          </section>{" "}
          <section>
            <label>Password:</label>
            <input type="text" required />
          </section>
          <section>
            <label>Select Your Role Below:</label><br/>
          Student  <input type="radio" name="role" value="student"/>
          Administrator  <input type="radio" name="role" value="administrator"/>
          Instructor  <input type="radio" name="role" value="instructor"/>
          </section>
          <button id="createAccountButton" >Create Account</button>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default CreateAccount;
