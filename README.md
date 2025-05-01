# Advanced User Authentication

This project implements a robust user authentication system using modern web technologies. It includes features such as user signup, login, logout, email verification, password reset, and authentication state management.

## Features

- **User Signup**: Register new users with secure password hashing.
- **User Login**: Authenticate users and generate JWT tokens.
- **Logout**: Clear authentication tokens and cookies.
- **Email Verification**: Verify user email addresses via unique tokens.
- **Forgot Password**: Send password reset links to users.
- **Password Reset**: Allow users to securely reset their passwords.
- **Authentication State Management**: Maintain user authentication state across sessions.

## Tech Stack

- **Frontend**: React, TailwindCSS, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT), Cookies
- **Other Tools**: Axios, bcrypt, dotenv

## Installation

1. Clone the repository:
   bash
   git clone https://github.com/Dineo-Modiselle/User_Authentication.git
   cd User_Authentication

2. Install dependancies for both frontend and backend:

# Backend

cd backend
npm install

# Frontend

cd ../frontend
npm install

3.Create a .env file in the backend directory and add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000

4.Start the development servers:

# Backend

cd backend
npm run dev

# Frontend

cd ../frontend
npm start

5. Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

### Authentication Routes

- `POST /api/auth/signup` - Register a new user.
- `POST /api/auth/login` - Login and receive a JWT token.
- `POST /api/auth/logout` - Logout and clear cookies.
- `POST /api/auth/verify-email` - Verify user email.
- `POST /api/auth/forgot-password` - Send password reset link.
- `POST /api/auth/reset-password` - Reset user password.

## Folder Structure

project/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── utils/
│ │ └── App.js
└──

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)

Feel free to customize this based on your specific project details!
