import { configDotenv } from "dotenv";
import express from "express";
import Connect_DB from "./Config DB/ConnectionWithDB.js";
import userRouter from './routes/user.route.js'
import TodoRouter from "./routes/todo.routes.js";

configDotenv();

const app = express(); 
app.use(express.json()); 
Connect_DB(); 

app.get("/", (req,res)=>{
  res.send("This is my Server"); 
})

app.use('/api/v1', userRouter); 
app.use('/api/v1', TodoRouter)

app.listen(process.env.PORT || 4001, ()=>{
  console.log("Your Server is running Succesfull" ,process.env.PORT );
})