# Todo REST API

## Project Overview

This project is a simple RESTful API built using Node.js, Express, and MongoDB. It provides basic CRUD (Create, Read, Update, Delete) operations for managing a todo list. The project implements user authentication with **JWT (JSON Web Token)** and **bcrypt** for password hashing. All API routes are secured, and only authenticated users can interact with the todo items.

## Features

- **Create** new todo items
- **Read** all or specific todo items
- **Update** existing todo items
- **Delete** todo items
- **User authentication** using JWT
- **Password encryption** using bcrypt
- Thoroughly tested using Postman
- Clean, readable, and well-structured code for maintainability

## Technologies Used

- **Node.js**: JavaScript runtime for server-side scripting.
- **Express**: Minimalist web framework for Node.js.
- **MongoDB**: NoSQL database to store todo items and user information.
- **JWT (JSON Web Token)**: Authentication system for secured API endpoints.
- **bcrypt**: Password hashing for secure storage.
- **Postman**: Used for testing API endpoints.

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/todo-api.git
   cd todo-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:
   ```bash
   PORT=5000
   MONGO_URI=your_mongo_db_uri
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the server**:
   ```bash
   npm run start
   ```

5. **Test the API**:
   You can use **Postman** to test the API endpoints.

## API Endpoints

- **User Routes**:
  - `POST /api/auth/register`: Register a new user (with bcrypt password hashing)
  - `POST /api/auth/login`: Login to obtain a JWT token

- **Todo Routes** (require JWT token):
  - `POST /api/todos`: Create a new todo
  - `GET /api/todos`: Get all todos
  - `GET /api/todos/:id`: Get a specific todo
  - `PUT /api/todos/:id`: Update a todo
  - `DELETE /api/todos/:id`: Delete a todo

## Authentication

To access the protected routes (Todo Routes), you need to include the JWT token in the **Authorization** header:
```
Authorization: Bearer <your_jwt_token>
```

## Postman Collection

You can import the provided Postman collection into your Postman client to test the API. The collection includes all endpoints and sample requests.

## Folder Structure

```
|-- backend
|   |-- controllers
|   |   |-- authController.js
|   |   |-- todoController.js
|   |-- models
|   |   |-- User.js
|   |   |-- Todo.js
|   |-- routes
|   |   |-- authRoutes.js
|   |   |-- todoRoutes.js
|   |-- server.js
|-- .env
|-- package.json
|-- README.md
```

## Security Considerations

- **JWT** is used to secure API routes.
- **bcrypt** is used for hashing passwords before storing them in the database.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


