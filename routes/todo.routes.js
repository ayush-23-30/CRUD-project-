import express from "express";
import { createTodoController,updateTodoController,deleteTodoController,getTodoControllers } from "../Controller/todo.controller.js";

const TodoRouter = express.Router(); 

TodoRouter.post("/createTodo", createTodoController);
TodoRouter.put("/updateTodo/:id", updateTodoController);
TodoRouter.get("/getTodo/:id", getTodoControllers);
TodoRouter.delete("/deleteTodo/:id", deleteTodoController);

export default TodoRouter; 