// import express from "express";
// import { register, login } from "../controller/authController.js";

// const router = express.Router();

// router.post("/admin/login", adminLogin); // Add this line
// router.get("/admin/users", getUsers);    // Add this line

// export default router;

// import express from "express";
// import { adminLogin, getReservations } from "../controller/adminController.js";

// const router = express.Router();

// router.post("/login", adminLogin);
// router.get("/reservations", getReservations);

// export default router;

import express from 'express';
import { adminLogin, getReservations } from '../controller/adminController.js';
import { verifyAdminToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', adminLogin);
router.get('/getreservations', verifyAdminToken, getReservations);

export default router;