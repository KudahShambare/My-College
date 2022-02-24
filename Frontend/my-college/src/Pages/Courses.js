import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Logo from "../Images/College.png";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
<<<<<<< Updated upstream
    fetch("http://localhost:5000/courses").then((resp)=>{
      setTimeout(() => {
      return   resp.json();
      }, 5000);
     }
    ).then((data)=>{
      setCourses(data);
    
    }).catch((error)=>{

      console.log(error);
    })  
  
  });
=======
    fetch("/courses")
      .then((resp) => resp.json())
      .then((data) => {
        setCourses(data);
      })
      .catch(
        (error) => {
          console.log(error);
        },
        [courses]
      );
  });

>>>>>>> Stashed changes
  return (
    <>
      <div className="pages">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" height="400" />
        </Link>
        <h1>Courses</h1>
        <ul>
<<<<<<< Updated upstream
     {console.log(courses)}
         {courses.map((elem)=>{
           return <li>{elem.course_name}</li>
         })}
=======
          {courses.map((elem) => {
            return <li key={elem.course_name}>{elem.course_name}</li>;
          })}
>>>>>>> Stashed changes
        </ul>
      </div>
      <Footer />
    </>
  );
};
export default Courses;
