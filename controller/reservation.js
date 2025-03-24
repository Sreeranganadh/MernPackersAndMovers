import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationScheme.js";

export const sendReservation = async (req, res, next) => {
  console.log("request.body =====", req.body);

  const { name, email, phone, date, serviceType } = req.body;
  
  if (!name || !email || !phone || !date|| !serviceType) {
    return next(new ErrorHandler("Please fill the full reservation form!", 400));
  }

  try {
    const newReservation = await Reservation.create({ name, email, phone, date, serviceType});
    
    console.log("Saved reservation:", newReservation); // Debugging log
    newReservation.save();
    res.status(200).json({
      success: true,
      message: "Reservation sent successfully!",
    });
  } catch (error) {
    console.error("Database Error:", error);

    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);
      return next(new ErrorHandler(validationErrors.join(" , "), 400));
    }

    return next(error);
  }
};
