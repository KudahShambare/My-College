import React from "react";
import Footer from "../Components/Footer.js";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <>
      <div className="pages">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" height="400" />
        </Link>
        <form id="createAccount" method="post" action="/createAccount">
          <h2>Create Account</h2>
          <section>
            <label>Username:</label>
            <input type="text" name="username" required />
          </section>{" "}
          <section>
            <label>Password:</label>
            <input type="password" name="password" required />
          </section>
          <section>
            <label>Select Your Role Below:</label><br/>
          Student  <input type="radio" name="role" value="student" required/>
          Administrator  <input type="radio" name="role" value="administrator" required/>
          Instructor  <input type="radio" name="role" value="instructor" required/>
          </section>
          <button id="createAccountButton" type="submit">Create Account</button>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default CreateAccount;
