import React, { useState } from "react";
<<<<<<< Updated upstream
=======
import StudentDashboard from "../Components/StudentDashboard.js";
import { useHistory} from "react-router-dom"
>>>>>>> Stashed changes

const FormCard = (props) => {
  const [name, setName] = useState("");
  const [userPassword, setUserPassword] = useState("");
<<<<<<< Updated upstream
const [reply,setReply]=useState({});


  const login = () => {
  fetch("/Studentlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      mode:"cors",
      body: JSON.stringify({
        "id":  userId ,
        "username": name ,
        "password":  userPassword
      })
    })
 .then((resp) => {
        resp.json();
      })
      .then((data) => {
      console.log(data);
        ;
     
        ///alert(data)
=======
  
  const [profileName,setProfileName]=useState("");
let history=useHistory();
  const login = (e) => {
    //preventing browser from reloading on submit
    e.preventDefault();
  


    fetch("http://localhost:5000/Studentlogin", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        username: name,
        password: userPassword,
      }),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data.rows);
        setProfileName(data.rows[0].username);
                  }).then(()=>{
                    //redirects to dashboard
                 history.push("/courses")
                  })
      .catch((error) => {
        console.log("error: " + error);
>>>>>>> Stashed changes
      });

      
    
    
  };
 

  return (
    <div id="formCard">
      <section>
        <h1>{props.status} Tips</h1>
<h3> name : {reply.name} </h3>
{console.log({reply})}
        <iframe
          src={`https://www.youtube.com/embed/${props.videoUrl.split("=")[1]}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </section>
      {/* Form action varies with prop value , we use post method to compare with data in DB. Post is ideal 
    than get beacuse of security reasons*/}
      <form>
        <h2>Login Details</h2>
<<<<<<< Updated upstream
        <section>
          <label>{props.status} ID:</label>
          <input
            type="number"
        
            required
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
        </section>
=======
>>>>>>> Stashed changes
        <section>
          <label>Username:</label>
          <input
            type="text"
            
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </section>{" "}
        <section>
          <label>Password:</label>
          <input
            type="password"
        
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            required
          />
        </section>
        <button className="submitButton" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
};
export default FormCard;
