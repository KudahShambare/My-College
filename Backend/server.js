require("dotenv").config();

const express=require("express");
const app=express();
app.use(express.json())

const { Client }=require("pg");
const client = new Client({
	connectionString: process.env.db_url,
	ssl: {
		rejectUnauthorized: false,
	},
});
client.connect();



/*Routes*/
app.get("/",(req,resp)=>{
    resp.send(process.env.db_password)
})

app.get("/courses",(req,resp)=>{
    client.query("select * from courses",(error,result)=>{
        if(error){
            resp.send("Error: "+error)
        }
        else{
        resp.send(result.rows)

        }
    })
})


const PORT=process.env.PORT || 5500 || 8000;
app.listen(PORT,()=>{
    console.log("App started to port "+PORT);
})