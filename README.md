# GrowStocks [Visit GrowStocks Website](https://growstocks.onrender.com/)
GrowStocks is a web application designed to provide a seamless platform for stock portfolio management. 
It allows users to view their holdings, positions, and place new orders in an intuitive and user-friendly interface.

## Project Overview
Live Site
Visit the live site: GrowStocks

## Features
User Authentication (Login/Signup)
View all stock holdings and positions
Place new orders
Dashboard for portfolio tracking
RESTful API integration with MongoDB backend

## Tech Stack
### Frontend
React.js: Used for building the dynamic UI.
Bootstrap: Styling the web pages.
Axios: Handling API requests to the backend.
### Backend
Node.js: Runtime environment for the backend.
Express.js: Web framework used for the server.
MongoDB: Database for storing user data, stock holdings, positions, and orders.
Mongoose: MongoDB object modeling for Node.js.

## Deployment
Render: Both the frontend and backend are hosted on Render.

## Setup Instructions
### Prerequisites
To run this project locally, ensure that you have the following installed:

Node.js (v14 or higher)
MongoDB (Running locally or using MongoDB Atlas)

Clone the Repository

git clone https://github.com/yourusername/growstocks.git
cd growstocks
### Setup Environment Variables
Create a .env file in the backend directory with the following contents:
MONGO_URL = <Your MongoDB connection string>
TOKEN_KEY = <Your JWT Secret Key>

### Install Dependencies
#### Backend
cd backend
npm install

#### Frontend
cd frontend
npm install
npm run build

#### Dashboard
cd dashboard
npm install
npm run build

## Run the Project Locally
Start MongoDB: Ensure MongoDB is running locally or provide the correct connection string in the .env file.

#### Run Backend: Start the backend server.
cd backend
npm start

#### Run Frontend: Start the React app for the frontend.
cd frontend
npm start

#### Run Dashboard: Start the dashboard app.
cd dashboard
npm start

### Access the Application
Frontend: http://localhost:3000
Backend: http://localhost:3002
Dashboard: http://localhost:3001

## API Endpoints
### Holdings
GET /allHoldings: Fetch all user stock holdings.

### Positions
GET /allPositions: Fetch all user stock positions.

### Orders
POST /newOrder: Place a new stock order.

### Authentication
POST /auth/signup: User registration.
POST /auth/login: User login.

## Deployment on Render

### Backend
Navigate to your Render dashboard and connect your backend repository.
#### Set the Root Directory to backend Empty
#### Add the following Build Command: cd frontend && npm install && npm run build cd ../dashboard && npm install && npm run build cd ../backend && npm install
#### Add the following Start Command: cd backend && npm start

### Frontend
#### Set the Root Directory to frontend Empty
#### Add the following Build Command: cd frontend && npm install && npm run build

### Dashboard
#### Set the Root Directory to dashboard Empty
#### Add the following Build Command: cd dashboard && npm install && npm run build

-----------------------------------------------------------------#THANK YOU ----------------------------------------------------------------------------------------
