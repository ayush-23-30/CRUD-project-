import { User } from "../models/user.models.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

import { configDotenv } from "dotenv";
configDotenv();


const SignUpController = async (req,res) =>{
 try {
   const {fullName, email , password , confirmPassword } = req.body; 

   if(!fullName || !email || !password ){
    return res.status(404).json({
      success : false , 
      message : "All feilds are required"
    })
   }

   const userExist = await User.findOne({email}); 

   if(userExist){
    return res.status(401).json({
      success : false,
      message : "This user is already exists"
    })
   }
   
   if(password !== confirmPassword){
    console.error("Password is not matched!");
    return res.status(404).json({
      success : false, 
      message : "Password don't match with confirm"
    })
   }

   let hashPassword; 

   try {
    hashPassword = await bcrypt.hash(password,10);

   } catch (error) {
    return res.status(404).json({
      success : false, 
      message : "Password is not hashed "
    })
   }

   const user = await User.create({
    fullName,
    email, 
    password : hashPassword
   })

   return res.status(200).json({
    user,
    success : true, 
    message : "User SignUp successful"
   })

 }catch(error){
  console.error("User SignUp controller is not working ", error.message);
  return res.status(300).json({
    success : false, 
    message : "User SignUp controller is not working",
    error : error.message
  })}
}


const loginController = async (req,res)=>{
  try {
    const {email , password} = req.body; 

    if(!email || !password){
      return res.status(404).json({
        success : false, 
        message : "Please fill all the details "
      })
    }
    const user = await User.findOne({email}); 
    if(!email){
      return res.status(404).json({
        success : false, 
        message : "Email is not exists"
      })
    }
    const payload = {
      email : user.email,
      id: user._id
    }
    let token; 
    if(await bcrypt.compare(password,user.password)){
      token  = jwt.sign(payload, process.env.JWT_SECRET_TOKEN , {
        expiresIn: "48h"
      }); 
    }
    user.token = token;
    user.password = undefined; // beacuse we don't want to share password for security reasons 
    return res.status(202).json({
      success : true, 
      token, 
      user,
      message : "user is logged In"
    })
  } catch (error) {
    console.error("User login controller is not working.", error.message);
  return res.status(300).json({
    success : false, 
    message : "User login controller have some error.",
    error : error.message
  })}
  }

export {SignUpController, loginController };