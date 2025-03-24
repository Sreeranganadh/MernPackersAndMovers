import mongoose from "mongoose";
import validator from "validator";  

const reservationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters!"],
        maxLength: [30, "First name cannot exceed 30 characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"],  // Changed validator to validate
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contain only 10 digits!"],
        maxLength: [10, "Phone number must contain only 10 digits!"],
    },
    date: {
        type: String,
        required: true,
    },
    serviceType: {  // Add this field
        type: String,
        required: [true, "Service type is required"],
        enum: ["household", "office", "vehicle", "storage", "international"]
    }

});

export const Reservation = mongoose.model("Reservation", reservationSchema);
