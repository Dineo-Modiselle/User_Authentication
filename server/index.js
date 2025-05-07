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
const PORT = process.env.PORT || 10000;


const _dirname = path.resolve();

//CORS
app.use(cors({  
  origin: "http://localhost:5174",
  credentials: true,
}));

//middlewares
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/auth", authRoutes);

//Serve static files
if(process.env.NODE_ENV === "production"){
app.use(express.static(path.join( _dirname, "/client/dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve( _dirname, "client", "dist", "index.html"));
});

}

//Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});


//Server
app.listen(10000, () => {
  connectDB();
  console.log("Server is running on port:", PORT);
});
