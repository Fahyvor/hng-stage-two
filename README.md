# Objective:

Build a simple REST API capable of CRUD operations on a resource, say, a "person". The chosen programming language should interface with any chosen database of your choice.

# Requirements:

REST API Development: Develop an API with endpoints for:

CREATE: Adding a new person. =>/api

READ: Fetching details of a person. => /api/user_id

UPDATE: Modifying details of an existing person => /api/user_id

DELETE: Removing a person => /api/user_id Ensure all interactions with the database are secure and free from common vulnerabilities (e.g., SQL injections).

# Database Modelling: (Bonus)

## UML Diagram: 

Design and present a UML (Unified Modeling Language) diagram that represents the structure and relationships of your API's classes and models.
Testing:

Using tools like Postman or (scripts written in Python using the requests library) that tests each CRUD operation in your API.
This should:

Add a new person (e.g., "Mark Essien").

Fetch details of a person

Modify the details of an existing person.

Remove a person

# Dynamic Parameter Handling:

Your API should be flexible enough to handle dynamic input. If we provide a name (or other details), your backend should be able to process operations using that name.

Example: If we pass "Mark Essien", we should be able to perform all CRUD operations on "Mark Essien".

Add validation – field should only be strings; integers or any other data type should not be allowed.

# Basic Work Through

Database Modelling

UML Diagram: UML (Unified Modeling Language) diagram that represents the structure and relationshipsh of the task API's classes and models
![uml drawio](https://github.com/Fahyvor/hng-stage-two/assets/98911558/ac3acc9c-353e-4719-bc03-fe53ce4c8fac)

# Codebase Setup

## Set up your development environment:

Ensure you have Node.js installed on your system. You can download it from the official website if you haven't already.

Create a new directory for your project and navigate to it in your terminal.

Initialize a new Node.js project and install Express and other dependencies:
npm init -y
npm install express body-parser express-validator mongoose dotenv

And optional Dev dependency nodemon for development to automatically restart the node application when file changes in the directory are detected
npm install --save-dev nodemon

Create a JavaScript file (e.g., app.js) for your Express application.

Write the code for your Express application in app.js:
Save the app.js file.

## Run your Express application:
node app.js
or nodemon app.js

Create a model folder for your Express application e.g. person.model.js
Write the schema for your Express application
Create a .env file and include your MONGODB URI e.g.
MONGODB_URI = 'mongodb+srv://<MONGODB_USERNAME>:<MONGODB_PASSWORD>@project_name.aohcpma.mongodb.net/?retryWrites=true&w=majority'

Save the app.js file.

## Run your Express application:
node app.js

# Live Link to test results
https://hng-stage-one-7s9d.onrender.com/api

# Live Link to READ from browser
https://hng-stage-one-7s9d.onrender.com/api/Mark%20Essien

# Screenshots Guide for Testing on Postman(VS Code Extension)
Testing the CREATE Operation on Postman 
![create](https://github.com/Fahyvor/hng-stage-two/assets/98911558/32ff8ed9-cdfa-42a6-bfb0-e84247f82abf)


Testing the READ Operation BY NAME on Postman
![read1](https://github.com/Fahyvor/hng-stage-two/assets/98911558/3dcbdb8a-8e75-4749-a1d2-23762d36d558)


Testing the READ Operation BY ID on Postman
![read2](https://github.com/Fahyvor/hng-stage-two/assets/98911558/08e47914-2d39-46e7-a1b7-867e70cebcf8)


Testing the UPDATE Operation on Postman
![update](https://github.com/Fahyvor/hng-stage-two/assets/98911558/77dc2787-2a98-4931-b401-e26cb8c859c9)

Testing the DELETE Operation on Postman
![delete](https://github.com/Fahyvor/hng-stage-two/assets/98911558/d75e1711-57c3-43ce-a6df-861f864360e6)
