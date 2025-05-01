import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/connectDB.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();

//PORT
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

//CORS
app.use(cors({  
  origin: "http://localhost:5173",
  credentials: true,
}));

//middlewares
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/auth", authRoutes);

// Serve static files from the React frontend app


//Server
app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port:", PORT);
});
