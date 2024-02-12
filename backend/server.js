import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRouter from './routes/auth.router.js'
import messageRouter from './routes/message.router.js'
import userRouter from './routes/user.router.js'

dotenv.config()


const app = express()


//middleware 
app.use(express.json());
app.use(cookieParser())
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/message',messageRouter)
app.use('/api/v1/users',userRouter)

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to the database");

    app.listen(process.env.PORT,()=>{
        console.log("server is up and running on",process.env.PORT);
    })
}).catch((error)=>{
    console.log("Error connecting to MongoDB", error.message)
})




