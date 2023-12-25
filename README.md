# Farmer-E-commerce-Project

Introduction
This repository contains code for a Client-Server application. The application is structured into two main folders:

Client: Contains files related to the client-side application.
Server: Contains files related to the server-side application.
Folder Structure
Client
The Client folder contains the following files:

data
data2
public
src
These files are related to the client-side application.

Server
The Server folder contains the following files:

controllers
middleware
models
routes
index.js
These files are related to the server-side application.

Installation and Running
To set up the application, follow these steps:

Create a folder and name it as desired.
Inside the folder, create two folders named Client and Server.
Add the respective files (data, data2, public, src) to the Client folder.
Add the respective files (controllers, middleware, models, routes, index.js) to the Server folder.
Once the folders and files are set up:

Open the terminal.
Navigate to the Client folder and run npm install to install the required node modules.
Navigate to the Server folder and run npm install to install the required node modules.
After installing the dependencies:

Open four separate terminals.
Run the following commands in each terminal:
npm start (for the client-side application)
nodemon app.js (for the server-side application)
npx json-server --watch data/db.json --port 8080 (to run a JSON server on port 8080)
npx json-server --watch data2/db.json --port 8000 (to run another JSON server on port 8000)
These commands will start the client-side and server-side applications along with the JSON servers.
