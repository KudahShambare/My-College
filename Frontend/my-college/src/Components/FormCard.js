import React, { useState } from "react";
import axios from "axios";

const FormCard = (props) => {
  const [userId, setUserId] = useState(0);
  const [name, setName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [reply, setReply] = useState({});

  const login = () => {
    axios
      .post("http://localhost:5000/Studentlogin", {
        username: { name },
        password: { userPassword },
        
      })
      .then(
        function (response) {
          console.log(response);
          setReply(response.status);
          console.log(reply);
        }
      )
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
