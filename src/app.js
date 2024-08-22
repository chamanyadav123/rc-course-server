import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()


const cors = require('cors');
const express = require('express');
const app = express();

// Apply CORS middleware
app.use(cors({
    origin: 'https://www.rccodex.co.in',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // If cookies or other credentials are involved
}));

// Your routes and other middleware


app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded())
app.use(express.static("public"))
app.use(cookieParser())



import adminRouter from "./routes/admin.routes.js"
app.use("/api/admin", adminRouter)



import userRouter from "./routes/user.routes.js"
app.use("/api/user", userRouter)

export {app}
