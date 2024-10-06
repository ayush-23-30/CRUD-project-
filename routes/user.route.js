import express from "express";
import { loginController, SignUpController } from "../Controller/user.controller.js";


const userRouter = express.Router(); 

userRouter.post("/sign-up", SignUpController)
userRouter.post("/login", loginController)

export default userRouter; 