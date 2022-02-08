import React from "react";

const FormCard = (props) => {
 

  return (
    <div id="formCard">
      <section>
        <h1>{props.status} Tips</h1>

        <iframe
          src ={`https://www.youtube.com/embed/${props.videoUrl.split("=")[1]}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
    </section>
    <form>
      <h2>Login Details</h2>
        <section>
          <label>{props.status} ID:</label>
          <input type="text" required/>
        </section>
        <section>
          <label>Username:</label>
          <input type="text" required/>

        </section>{" "}
        <section>
          <label>Password:</label>
          <input type="text" required/>

        </section>
        <button className="submitButton">Login</button>
      </form>
    </div>
  );
};
export default FormCard;
