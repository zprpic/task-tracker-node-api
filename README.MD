# TASK TRACKER API

## Technologies used:

- Database : MongoDB

- Backend: Node, Express

<<<<<<< HEAD
- Frontend: React

- Dependencies: dotenv, mongoose, nodemon, cors
=======
- Dependencies: dotenv, mongoose, nodemon, httpstatus
>>>>>>> 600396abeca880ae8d92fe671d0a5608552505c4

### 1 Install dependencies

    Updating package.json via npm install with: `{ "name": "task-tracker", "version": "1.0.0", "description": "", "main": "app.js", "scripts": { "start": "nodemon app.js" }, "keywords": [], "author": "", "license": "ISC", "dependencies": { "dotenv": "^8.2.0", "express": "^4.17.1", "mongoose": "^5.11.10" }, "devDependencies": { "nodemon": "^2.0.7" } }`

### 2 Add .gitignore for /node_modules && .dotenv

### 3 Create GitHub repo for "task-tracker" and to project on local machine

### 4 Setup basic express server:

`const app = require("express")(); const port = process.env.PORT || 3000;

const start = async () => { try { // DB Connection app.listen(port, console.log(Server listening on port ${port})); } catch (error) { console.log(error); } }; start();`
5 Setup DB connection:

- Create "db" Folder
- Create file "connect.js" in "db" folder

`const mongoose = require("mongoose");

const connectDB = (url) => { return mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true, }); };

module.exports = connectDB;`

### 6 Connect server with DB in app.js using .dotenv dependency

- Create .env file with MONGO_URI
- Add await connectDB() to app.js
- Pass MONGO_URI as process.env.MONGO_URI from .env to connectDB() in app.js

### 7 Test DB connection

- Manually create dummy task in mongoDB: a) create DB called "TASK-TRACKER", b) create DB collection called "TASKS"

- Create "models" folder with file "Task.js" that uses the mongoose Schema

- Create dummy middleware

- Create dummy controller

- Create dummy route

- Test via Postman

- QUICKNOTE: The call to mongoose.model establishes the name of the collection the model is tied to, with the default being the pluralized, lower-cased model name. I.E. mongoose.model("TASK", Task) will be mongoose.model("tasks", Task)

### 8 Clean up the folder structure and improve separation of concerns

- Read thoroughly https://softwareontheroad.com/ideal-nodejs-project-structure/
- Improve folder structure and separation of concerns following the link above

### 8.1 At least get the server running with improved folder structure and improved separation of concerns

### 8.2 Get the GET all tasks route working with improved folder structure and improved separation of concerns

### 9 Finish adding all routes

- GET single task route
- PATCH/update route
- DELETE route

### 10 Set up error handling

- Error function
- Middleware error function
- Test error handling

### 10.1 Global error and specific error handling

- GET 404 errors. Not found.
- DELETE 404 errors. Not found.
- POST/PATCH 404 errors not found AND 400 errors bad request (min/maxlength...,)

### 10.2. Create extract error message function

- checkForErrors function
- if (errors) => prepareErrorMessage()

### 11 Refactor routes file (tasks.js)

- router.route...
- separated routes

### 12 Refactor services folders

- fragment services into separate service files
- import all services into index
