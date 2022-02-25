import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const FormCard = (props) => {

  const [name, setName] = useState("");
  const [userPassword, setUserPassword] = useState("");



const history=useHistory();

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/Studentlogin", {
        username: name,
        password:userPassword,
        
      })
      .then(
         (resp) =>{
           if(resp.data.rowCount===0){
            const form=document.querySelector("form");
            form.innerHTML="Wrong username/password";
            setTimeout(()=>{
              
            })
           }
          console.log(resp.data.rows[0].username);
        
        }
      ).then(()=>{
        //redirect to Dashboard
       
history.push("/StudentDashboard");
        
      
        
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div id="formCard">
      <section>
        <h1>{props.status} Tips</h1>
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
