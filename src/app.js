import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// Apply CORS middleware
app.use(cors({
    origin: 'https://www.rccodex.co.in',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // If cookies or other credentials are involved
}));

// Middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
import adminRouter from "./routes/admin.routes.js";
app.use("/api/admin", adminRouter);

import userRouter from "./routes/user.routes.js";
app.use("/api/user", userRouter);

// Handle OPTIONS requests
app.options('*', cors());

export { app };
