# NoBrainer-REST-API

# Node.js REST API with MongoDB and Azure App Services

This repository contains a Node.js REST API connected to a MongoDB database, hosted on Azure App Services. The API handles typical create and read operations and is designed for scalability and efficiency.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Deployment](#deployment)
- [License](#license)

## Features

- RESTful API built with Node.js and Express
- MongoDB for database management
- Hosted on Azure App Services for seamless scalability
- Environment variables for secure configuration
- Robust error handling and validation
- Supports create and read operations for the defined models

## Technologies

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Azure App Services](https://azure.microsoft.com/en-us/services/app-service/)

## Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (either locally or cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Azure Account (for deployment on Azure App Services)
- Postman or cURL (for testing API endpoints)

## Getting Started

### Installation

- Clone the repository:

   ```bash
   git clone https://github.com/sakidpilot/NoBrainer-REST-API.git
   cd NoBrainer-REST-API

- Install dependencies:

   ```bash
   npm install

### Environment Variables
  Create a .env file in the root of the project to define the following environment variables:


     PORT=3000
     MONGODB_URI=mongodb+srv://st10198310:oYEJboNQxGsdDQ2X@cluster0.oiptz.mongodb.net/guide?retryWrites=true&w=majority&appName=Cluster0
     AZURE_APP_URL=https://st10198310-testapi.azurewebsites.net

### Running Locally
To run the API locally, use:

      npm start

The API will be accessible at http://localhost:3000

## API Endpoints

GET	/api/guide  -->	Retrieve all user guide data
POST /api/postguide  --> Adds user guide data

## Database Schema
The application uses MongoDB to store data. Below is a sample schema for a resource:

 guideData:
 {
   type: String,
   required: true
 }

## Deployment
 Deploying to Azure App Services
 Set up an Azure account and create an App Service.

 Configure the App Service to use Node.js.

 Connect your MongoDB instance (local or cloud) to the app service.

 Push your code to Azure via Git or GitHub Actions:


    git remote add azure https://your-app-url.scm.azurewebsites.net:443/NoBrainer-REST-API.git
    git push azure main
    Set environment variables in the Azure App Service configuration.
 The app should now be live at https://<your-app-name>.azurewebsites.net.


## License
This project is licensed under the MIT License - see the LICENSE file for details.
