import { Todo } from "../models/todo.models.js";

const createTodoController = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(401).json({
        success: false,
        message: " All feilds are required",
      });
    }

    const todo = await Todo.create({
      title,
      description,
    });

    return res.status(200).json({
      success: true,
      todo,
      message: "Todo created successfull",
    });
  } catch (error) {
    console.error("Todo controller has some errors", error.message);
    return res.status(404).json({
      success: false,
      message: "Todo controller has some errors",
      error: error.message,
    });
  }
};

const getTodoControllers = async (req, res) => {
  try {
    const  id  = req.params.id;

    if (!id) {
      res.status(402).json({
        success: false,
        message: "ID not find",
      });
    }

    const todo = await Todo.findById({ _id: id });

    if (!todo) {
      res.status(402).json({
        success: false,
        message: "todo not find",
      });
    }
    res.status(201).json({
      todo,
      success: true,
      message: "Todo finded",
    });
  } catch (error) {
    console.log("get todo controller is not working", error.message);
    res.status(401).json({
      success: false,
      error: error.message,
      message: "there is an error in getting a todo.",
    });
  }
};

const updateTodoController = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "ID not found",
      });
    }

    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const todoUpdate = await Todo.findByIdAndUpdate(
      id,
      { title, description },
      { new: true } // Returns the updated document
    );

    if (!todoUpdate) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      todoUpdate,
      message: "Todo has been updated successfully",
    });
  } catch (error) {
    console.error("There is an error in the update controller:", error.message);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Can't update the todo",
    });
  }
};


const deleteTodoController = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "ID not found",
      });
    }

    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }
    return res.status(200).json({
      success: true,
      todo,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    console.error("Delete controller is having some issues", error.message);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Can't delete the todo",
    });
  }
};


export { deleteTodoController, getTodoControllers, createTodoController , updateTodoController};
