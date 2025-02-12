import React from "react";
import Footer from "../Components/Footer.js";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./CreateAccount.css"; // Import CSS for styling

const CreateAccount = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

  return (
    <>
      <div className="pages create-account-page">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" height="200" />
        </Link>
        <form id="createAccount" method="post" onSubmit={handleSubmit}>
          <h2>Create Account</h2>

          {/* Username Field */}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              minLength="8"
            />
            <small>Password must be at least 8 characters long.</small>
          </div>

          {/* Role Selection */}
          <fieldset className="form-group">
            <legend>Select Your Role:</legend>
            <div className="role-options">
              <label>
                <input type="radio" name="role" value="student" required /> Student
              </label>
              <label>
                <input type="radio" name="role" value="administrator" required /> Administrator
              </label>
              <label>
                <input type="radio" name="role" value="instructor" required /> Instructor
              </label>
            </div>
          </fieldset>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Create Account
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateAccount;