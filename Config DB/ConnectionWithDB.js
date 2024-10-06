import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv(); 


const Connect_DB =  async()=>{
 await mongoose.connect(process.env.DB_URL) 
 .then(()=>{
  console.log("DB is connected Successfully");
  
 }).catch((err)=>{
console.error("There is an error in connection With DB", err.message);
process.exit(1); 
 })
}

export default Connect_DB;
