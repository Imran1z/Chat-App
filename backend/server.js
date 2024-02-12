import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRouter from './routes/auth.router.js'

dotenv.config()


const app = express()



mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to the database");

    app.listen(process.env.PORT,()=>{
        console.log("server is up and running on",process.env.PORT);
    })
}).catch((error)=>{
    console.log("Error connecting to MongoDB", error.message)
})


app.use('/api/v1/auth',authRouter)



//middleware 
app.use(express.json())
app.use(cookieParser)