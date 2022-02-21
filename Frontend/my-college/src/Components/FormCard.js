import React, { useState } from "react";
import axios from "axios";

const FormCard = (props) => {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [userPassword, setUserPassword] = useState("");
const [reply,setReply]=useState({});


  const login = () => {
  
    axios.post('http://localhost:5000/Studentlogin', {
      username: {name},
      password: {userPassword},
      id:{userId}
    })
    .then(function (response) {
      console.log(response);
      setReply()
    })
    .catch(function (error) {
      console.log(error);
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
