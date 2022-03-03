import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Logo from "../Images/College.png";

const Courses = () => {
  const [courses, setCourses] = useState();
  useEffect(() => {
    fetch("http://localhost:4000/courses")
      .then((resp) => {
        resp.json();
      })
      .then((data) => {
        setTimeout(()=>{

        },5000)
        setCourses(data);
        //return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, [courses]);

  return (
    <>
      <div className="pages">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" height="400" />
        </Link>
        <h1>Courses</h1>
        <ul>
          {console.log(courses)}
          {courses.map((elem) => {
            return <li>{elem.course_name}</li>;
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
};
export default Courses;
