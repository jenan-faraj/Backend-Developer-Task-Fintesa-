# User Authentication System

User authentication and authorization system built with React, Node.js, and MongoDB

## Features

* New user registration
* Login with JWT authentication
* Role-based system (regular user, admin)
* Protected routes
* Admin dashboard
* Responsive UI with Tailwind CSS

## Requirements

* Node.js (v14 or newer)
* MongoDB
* npm or yarn

## Installation and Setup

### 1. Clone the Project

```bash
git clone https://github.com/jenan-faraj/Backend-Developer-Task-Fintesa-.git
cd Backend-Developer-Task-Fintesa-
```

### 2. Backend Setup

```bash
cd Back-End
npm install
```

### 3. Create Environment File

```bash
cp .env.example .env
```

Edit the `.env` file and add:

```
MONGODB_URI=mongodb_url
JWT_SECRET=S3cr3tT0k3n_Genan2025!@#
PORT=5000
```

### 4. Start MongoDB
Make sure MongoDB is running on your system

### 5. Start Backend Server

```bash
npm run dev
```

### 6. Frontend Setup
In a new terminal:

```bash
cd Front-End
npm install
npm run dev
```

## Usage

### Available Routes:
* `/register` - Register new user
* `/login` - User login
* `/dashboard` - User dashboard
* `/admin` - Admin dashboard (admin only)

### API Endpoints:
* `POST /api/auth/register` - Register new user
* `POST /api/auth/login` - User login
* `GET /api/users/me` - Current user information
* `GET /api/admin` - Admin-only endpoint
* `GET /api/users/all` - All users (admin only)
* `PUT /api/users/role` - Update user role (admin only)

## Technical Stack

### Backend:
* **Express.js** - Web framework
* **MongoDB & Mongoose** - Database
* **JWT** - Authentication
* **bcryptjs** - Password encryption

### Frontend:
* **React** - UI library
* **React Router** - Navigation
* **Tailwind CSS** - Styling
* **Axios** - HTTP requests
* **Context API** - State management

## Security

* Passwords encrypted using bcrypt
* JWT tokens for authentication
* Role-based route protection
* Data validation

## Testing the System

### Creating an Admin:
1. Register a new user
2. In the database, change `role` to `admin`
3. Login again

Or use MongoDB Compass:

```javascript
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { role: "admin" } }
)
```

## Important Files

```
Back-End/
├── server.js              # Entry point
├── config/database.js     # Database connection  
├── models/               # Data models
├── controllers/          # Control logic
├── middleware/           # Middleware
└── routes/              # Routes

Front-End/
├── src/
│   ├── components/       # React components
│   ├── context/         # Context API
│   ├── services/        # API services
│   └── App.jsx         # Main component
```

## Development

For development, run both backend and frontend servers:

```bash
# Terminal 1 - Backend
cd Back-End && npm run dev

# Terminal 2 - Frontend  
cd Front-End && npm run dev
```
