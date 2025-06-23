# User Authentication System

A user authentication and authorization system built with React, Node.js, and MongoDB.

## Features

- User registration
- JWT-based login
- Role-based system (user, admin)
- Protected routes
- Admin dashboard
- Responsive UI with Tailwind CSS

## Requirements

- Node.js (v14 or later)
- MongoDB
- npm or yarn

## Installation & Setup

### 1. Clone the project
```bash
git clone <repository-url>
cd auth-system
2. Set up Backend
bash
cd backend
npm install
3. Create environment file
bash
cp .env.example .env
Edit .env file and add:

text
MONGODB_URI=mongodb://localhost:27017/auth_system
JWT_SECRET=your_very_long_and_random_secret_key_here
PORT=5000
4. Run MongoDB
Make sure MongoDB is running on your system

5. Start Backend Server
bash
npm run dev
6. Set up Frontend
In a new terminal:

bash
cd frontend
npm install
npm run dev
Usage
Available Routes:
/register - User registration

/login - User login

/dashboard - User dashboard

/admin - Admin dashboard (admin only)

API Endpoints:
POST /api/auth/register - Register new user

POST /api/auth/login - User login

GET /api/users/me - Current user info

GET /api/admin - Admin-only endpoint

GET /api/users/all - All users (admin only)

PUT /api/users/role - Update user role (admin only)

Technical Stack
Backend:
Express.js - Framework

MongoDB & Mongoose - Database

JWT - Authentication

bcryptjs - Password hashing

Frontend:
React - UI Library

React Router - Navigation

Tailwind CSS - Styling

Axios - HTTP requests

Context API - State management

Security
Password encryption with bcrypt

JWT tokens for authentication

Role-based route protection

Data validation

Testing the System
Create an Admin:
Register a new user

In the database, change role to admin

Login again

Or use MongoDB Compass:
javascript
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { role: "admin" } }
)
Important Files
text
backend/
├── server.js              # Entry point
├── config/database.js     # DB connection  
├── models/               # Data models
├── controllers/          # Controller logic
├── middleware/           # Middleware
└── routes/              # Routes

frontend/
├── src/
│   ├── components/       # React components
│   ├── context/         # Context API
│   ├── services/        # API services
│   └── App.jsx         # Main component
Development
For development, run both backend and frontend:

bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend  
cd frontend && npm run dev
Production
Build Frontend:
bash
cd frontend
npm run build
Run Server:
bash
cd backend
npm start