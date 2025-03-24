import { User } from "../models/userModel.js";
import ErrorHandler from "../error/error.js";

export const register = async (req, res, next) => {
    try {
        const { name, email, password, phone } = req.body;

        let user = await User.findOne({ email });
        if (user) {
            return next(new ErrorHandler("User already exists", 400));
        }

        user = await User.create({
            name,
            email,
            password,
            phone
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully"
        });
    } catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return next(new ErrorHandler("Invalid email or password", 401));
        }

        if (password !== user.password) {
            return next(new ErrorHandler("Invalid email or password", 401));
        }

        res.status(200).json({
            success: true,
            message: "Login successful"
        });
    } catch (error) {
        next(error);
    }
};