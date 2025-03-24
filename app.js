// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import {dbConnection} from "./database/dbConnection.js";
// import { errorMiddleware } from "./error/error.js";
// import reservationRouter from "./routes/reservationRoute.js";
// import authRouter from "./routes/authenticationRoute.js"

// const app = express();
// dotenv.config();

// // Update CORS configuration
// app.use(cors({
//     origin: "http://localhost:5173", // Explicitly set frontend URL
//     methods: ["GET", "POST"],
//     credentials: true
// }));

// app.use(express.json());
// // app.use(express.urlencoded({extended: true}));

// // Fix the route path
// app.use("/api/v1/reservation", reservationRouter);
// app.use("api/auth",authRouter)

// dbConnection();
// app.use(errorMiddleware);

// export default app;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {dbConnection} from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import authRouter from "./routes/authenticationRoute.js"

const app = express();
dotenv.config();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Fix: Add forward slash before api
app.use("/api/v1/reservation", reservationRouter);
app.use("/api/auth", authRouter); // Fixed: Added forward slash

dbConnection();
app.use(errorMiddleware);

export default app;
