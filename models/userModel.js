import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your name"],
        minLength: [3, "Name must be at least 3 characters"],
        maxLength: [30, "Name cannot exceed 30 characters"]
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minLength: [6, "Password must be at least 6 characters"]
    },
    phone: {
        type: String,
        required: [true, "Please provide your phone number"],
        minLength: [10, "Phone number must be 10 digits"],
        maxLength: [10, "Phone number must be 10 digits"]
    }
});

export const User = mongoose.model("User", userSchema);