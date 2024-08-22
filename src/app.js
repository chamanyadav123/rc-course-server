import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()


app.use(cors({
    origin: 'https://www.rccodex.co.in',
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded())
app.use(express.static("public"))
app.use(cookieParser())



import adminRouter from "./routes/admin.routes.js"
app.use("/api/admin", adminRouter)



import userRouter from "./routes/user.routes.js"
app.use("/api/user", userRouter)

export {app}
