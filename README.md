# Student Record API

A RESTful API to manage student records, built with Node.js, Express, and MongoDB.

## Overview

This repository contains a backend API for managing student records with Create, Read, Update, Delete (CRUD) operations.
It uses Express for routing and Mongoose to interact with MongoDB.

## Features

* Add new students with validation
* Retrieve all students or individual students by ID
* Update records by student ID
* Delete records by student ID
* JSON request/response
* Environmental configuration using `.env`

## Installation

1. Clone the repository:

```bash
git clone https://github.com/praveen22-web/Student-API.git
```

2. Navigate into the project directory:

```bash
cd Student-API
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root with:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
```

5. Start the server:

```bash
npm start
```

6. The API server will run at `http://localhost:5001`

## Usage

Use HTTP clients like Postman or curl to interact with the API.

### API Endpoints

| Method | Endpoint            | Description              |
| ------ | ------------------- | ------------------------ |
| GET    | `/api/students`     | Retrieve all students    |
| GET    | `/api/students/:id` | Retrieve a student by ID |
| POST   | `/api/students`     | Add a new student        |
| PUT    | `/api/students/:id` | Update a student by ID   |
| DELETE | `/api/students/:id` | Delete a student by ID   |

### Example: Create a Student

```http
POST /api/students
Content-Type: application/json

{
  "name": "John Doe",
  "course": "Computer Science",
  "age": 22,
  "city": "New York"
}
```

### Example: Update a Student

```http
PUT /api/students/69221451d9109fb7eaa25ee3
Content-Type: application/json

{
  "name": "Jane Doe",
  "age": 23,
  "city": "Los Angeles"
}
```

## Technologies

* Node.js
* Express.js
* MongoDB (Mongoose)
* dotenv

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests. For major changes, open an issue first for discussion.

## License

This project is licensed under the MIT License.

---

