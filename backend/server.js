import path from 'path'
import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from "cookie-parser";
import authRouter from './routes/auth.router.js';
import messageRouter from './routes/message.router.js';
import userRouter from './routes/user.router.js';
import { app, server } from "./socket/socket.js";

dotenv.config();

const __dirname =path.resolve();

// Middleware
app.use(cors({
    origin: "http://localhost:5173" // Update with your React client origin
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/message', messageRouter);
app.use('/api/v1/users', userRouter);

app.use(express.static(path.join(__dirname,"/frontend/dist")));
app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname,'frontend', 'dist', 'index.html'))
});



mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to the database");

        server.listen(process.env.PORT, () => {
            console.log("Server is up and running on", process.env.PORT);
        });
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB", error.message);
    });
