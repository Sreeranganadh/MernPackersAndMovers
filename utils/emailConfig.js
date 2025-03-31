import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

export const generateEmailTemplate = (reservation) => {
    return `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2c3e50; text-align: center;">MoveIt - Reservation Confirmation</h2>
            <p style="color: #34495e;">Dear ${reservation.name},</p>
            <p style="color: #34495e;">Thank you for choosing MoveIt! Your reservation has been successfully received.</p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <h3 style="color: #2c3e50; margin-top: 0;">Reservation Details:</h3>
                <ul style="list-style: none; padding: 0;">
                    <li>📍 Pickup: ${reservation.pickup}</li>
                    <li>🎯 Drop: ${reservation.drop}</li>
                    <li>📅 Date: ${reservation.date}</li>
                    <li>🚛 Service Type: ${reservation.serviceType}</li>
                    <li>🚐 Vehicle Type: ${reservation.vehicle}</li>
                </ul>
            </div>
            
            <p style="color: #34495e;">Our team will contact you shortly at ${reservation.mobile} for further details.</p>
            
            <div style="text-align: center; margin-top: 30px;">
                <p style="color: #7f8c8d; font-size: 14px;">
                    If you have any questions, please contact us:<br>
                    📞 +91-733 09 115 99<br>
                    📧 sreeranganadh@gmail.com
                </p>
            </div>
        </div>
    `;
};