

import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationScheme.js";
import { transporter, generateEmailTemplate } from "../utils/emailConfig.js";

export const sendReservation = async (req, res, next) => {
    try {
        const { pickup, drop, date, serviceType, vehicle, name, email, mobile } = req.body;
        console.log("Received data:", req.body);

        if (!pickup || !drop || !date || !serviceType || !vehicle || !name || !email || !mobile) {
            return next(new ErrorHandler("All fields are required", 400));
        }

        const reservation = new Reservation({
            pickup,
            drop,
            date,
            serviceType,
            vehicle,
            name,
            email,
            mobile
        });

        await reservation.save();

        try {
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'MoveIt - Reservation Confirmation',
                html: generateEmailTemplate(reservation)
            };

            await transporter.sendMail(mailOptions);
            console.log('Confirmation email sent successfully');
        } catch (emailError) {
            console.error('Error sending confirmation email:', emailError);
            // Don't throw error, continue with response
        }

        res.status(201).json({
            success: true,
            message: "Reservation created successfully",
            data: reservation
        });

    } catch (error) {
        console.error("Server error:", error);
        return next(new ErrorHandler(error.message, 500));
    }
};