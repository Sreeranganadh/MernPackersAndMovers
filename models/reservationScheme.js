


import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  pickup: {
    type: String,
    required: [true, "Pickup location is required"],
  },
  drop: {
    type: String,
    required: [true, "Drop location is required"],
  },
  date: {
    type: String,
    required: [true, "Date is required"],
  },
  serviceType: {
    type: String,
    required: [true, "Service type is required"],
    enum: ["household", "office", "vehicle", "storage", "international"],
  },
  vehicle: {
    type: String,
    required: [true, "Vehicle type is required"],
    enum: ["van", "truck", "lorry", "mini van", "mini truck"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  mobile: {
    type: String,
    required: [true, "Mobile number is required"],
    match: [/^\d{10}$/, "Mobile number must be 10 digits"],
  },
}, { timestamps: true });

export const Reservation = mongoose.model("Reservation", reservationSchema);
