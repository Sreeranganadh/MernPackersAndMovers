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



// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import {dbConnection} from "./database/dbConnection.js";
// import { errorMiddleware } from "./error/error.js";
// import reservationRouter from "./routes/reservationRoute.js";
// import adminRouter from "./routes/adminRoute.js";

// const app = express();
// dotenv.config();

// app.use(cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST"],
//     credentials: true
// }));

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// // Define routes
// app.use("/api/v1/reservation", reservationRouter);
// app.use("/api/auth/admin", adminRouter);

// // Connect to database
// dbConnection();

// // Error handling middleware
// app.use(errorMiddleware);

// export default app;



import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import reservationRouter from "./routes/reservationRoute.js";
import adminRouter from "./routes/adminRoute.js";

const app = express();
dotenv.config();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);
app.use("/api/v1/admin", adminRouter);

dbConnection();

export default app;