import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
//PORT
const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);

//Server
app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port:", PORT);
});
