import jwt from 'jsonwebtoken';
import { Reservation } from '../models/reservationScheme.js';

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (email === 'ranganadh@gmail.com' && password === '9573198755') {
            const token = jwt.sign(
                { isAdmin: true }, 
                process.env.JWT_SECRET || 'your-secret-key',
                { expiresIn: '1d' }
            );
            
            return res.status(200).json({
                success: true,
                token,
                message: 'Login successful'
            });
        }
        
        return res.status(401).json({
            success: false,
            message: 'Invalid credentials'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find().sort({ createdAt: -1 });
        return res.status(200).json({
            success: true,
            reservations
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};