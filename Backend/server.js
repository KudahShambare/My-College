require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


//DB Connection
const { Client } = require("pg");
const client = new Client({
  connectionString: process.env.db_url,
  ssl: {
    rejectUnauthorized: false,
  },
});
client.connect();

/*Routes*/

app.get("/courses", (req, resp) => {
  client.query("select * from courses", (error, result) => {
    if (error) {
      resp.send("Error: " + error);
    } else {
      resp.send(result.rows);
    }
  });
});
app.get("/applicants", (req, resp) => {
  client.query("select * from applicants", (error, result) => {
    if (error) {
      resp.send("Error: " + error);
    } else {
      resp.send(result.rows);
    }
  });
});
app.post("/Studentlogin", (req, resp) => {
  let id = req.body.id;
  let name = req.body.username;
  let password = req.body.password;

  client.query("select * from students where username=$1 and password=$2 and id=$3", [name,password,id])
    .then((error,result) => {
      if(error){
resp.send({error:"error"})
      }
      if(result){
let valueArray=result.rows;
      //Checking if resultis available
      if(valueArray.length===0){
        resp.send("User/password not found")
      }
      if(valueArray.length===1){
        console.log(valueArray);
        resp.send(valueArray)
      }
     
      }
      
      

    });
});
/*Post Requests*/
app.post("/createAccount", (req, resp) => {
  let username = req.body.username;
  let password = req.body.password;
  let role = req.body.role;

  if (role == "administrator") {
    client
      .query("insert into admins (name,password) values ($1,$2) ", [
        username,
        password,
      ])
      .then(() => {})
      .catch((error) => {
        resp.send("Error " + error);
      });
  } else if (role == "student") {
    client
      .query(
        "insert into students (username,password,status) values ($1,$2,$3) ",
        [username, password, "not revealed"]
      )
      .then(() => {})
      .catch((error) => {
        resp.send("Error " + error);
      });
  } else {
    client
      .query("insert into instructor (username,password) values ($1,$2) ", [
        username,
        password,
      ])
      .then(() => {})
      .catch((error) => {
        resp.send("Error " + error);
      });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("App started to port " + PORT);
});
