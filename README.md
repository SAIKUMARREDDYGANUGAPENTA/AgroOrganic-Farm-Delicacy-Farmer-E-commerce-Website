# AgroOrganic-Farm-Delicacy-Farmer-E-commerce-Website



# Farming Marketplace
Overview
The Farming Marketplace is an online platform designed to facilitate the buying and selling of agricultural products. This web application is built using ReactJS, offering a user-friendly interface for farmers to interact with the marketplace.

# Features
Selling Products
Farmers' Market: Farmers can create listings to sell their produce, seeds, livestock, or other farming-related products.
Product Details: Sellers can provide comprehensive details about the products they are selling, including images, descriptions, quantity, and pricing.
# Buying Products
Product Search: Buyers can browse through various agricultural products listed on the platform.
Purchase Options: Users can choose products and make purchases based on their requirements.
User Interaction
User Profiles: Registered users can have their profiles with information about their farms, products, and ratings.
Messaging System: A communication channel allows users to interact with sellers and buyers for inquiries or negotiations.
# Admin Dashboard
Moderation: Admins have access to manage listings, user accounts, and ensure the authenticity of products listed on the platform.
Analytics: Insights into user activities, product trends, and overall marketplace performance.
Objective
The primary goal of this project is to provide a convenient and efficient platform for farmers to sell their produce and agricultural goods. Additionally, it aims to empower buyers with a diverse range of farming-related products to support their agricultural needs.

# Technology Stack
Frontend: ReactJS, HTML, CSS, JavaScript
Backend:Express,node.js
Database: MOgoDb,JSON


# Introduction
This repository contains code for a Client-Server application. The application is structured into two main folders:

Client: Contains files related to the client-side application.
Server: Contains files related to the server-side application.
Folder Structure
# Client
The Client folder contains the following files:

data
data2
public
src
These files are related to the client-side application.

# Server
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

# Open the terminal.
Navigate to the Client folder and run npm install to install the required node modules.
Navigate to the Server folder and run npm install to install the required node modules.
After installing the dependencies:

# Open four separate terminals.
Run the following commands in each terminal:
npm start (for the client-side application)
nodemon app.js (for the server-side application)
npx json-server --watch data/db.json --port 8080 (to run a JSON server on port 8080)
npx json-server --watch data2/db.json --port 8000 (to run another JSON server on port 8000)
These commands will start the client-side and server-side applications along with the JSON servers.





