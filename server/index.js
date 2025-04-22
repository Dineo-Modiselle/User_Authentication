import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/connectDB.js';
import authRoutes from './routes/authRoutes.js';


dotenv.config();
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use("/api/auth",authRoutes)

app.listen(3000, () => {
    connectDB();
    console.log('Server is running on port 3000');
});
//E2D1nbtKau9NM2FD
//mongodb+srv://charutymodiselle:E2D1nbtKau9NM2FD@cluster0.fboeteh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb+srv://dineomodiselle:LastDance2@cluster0.hzqih.mongodb.net/