import React,{useEffect,useState} from "react";
import Footer from "../Components/Footer"
const Courses = () => {

  const [courses,setCourses]=useState([]);
  useEffect(() => {
    fetch("/courses").then(resp=>resp.json()
    ).then((data)=>{
      setCourses(data);
      return data;
    }).catch((error)=>{
      console.log(error);
    })  
  
  });
  
  return (
    <>
          {console.log(courses)}

      <div>
        <h1>Courses</h1>
        <ul>
         {courses.map((elem)=>{
           return <li>{elem.course_name}</li>
         })}
        </ul>
      </div>
      <Footer />
    </>
  );
};
export default Courses;
