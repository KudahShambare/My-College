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
    {/* Form action varies with prop value*/}
    <form method="get" action={"/"+props.status+"login"}>
      <h2>Login Details</h2>
        <section>
          <label>{props.status} ID:</label>
          <input type="text" name="id" required  />
        </section>
        <section>
          <label>Username:</label>
          <input type="text"  name="username" required  />

        </section>{" "}
        <section>
          <label>Password:</label>
          <input type="password" name="password"required/>

        </section>
        <button className="submitButton" type="submit" >Login</button>
      </form>
    </div>
  );
};
export default FormCard;
