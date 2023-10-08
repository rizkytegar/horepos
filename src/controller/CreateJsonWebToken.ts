import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

// Secret key for JWT 
const { secretKey } = require('../config/Jwt');

/**
 * Create a JWT (JSON Web Token) and send a JSON response.
 * Handles HTTP POST requests.
 */
const createJsonWebToken = async (req: Request, res: Response) => {
    try {
        // Mengambil data dari body permintaan POST
        const { userId, username } = req.body;

        if (!userId || !username) {
            return res.status(400).json({ success: false, message: 'UserId and username are required' });
        }

        const payload = {
            userId,
            username,
        };
 
        const token = jwt.sign(payload, secretKey, { expiresIn: '30m' });

        res.status(200).json({ success: true, token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to create JWT token' });
    }
};

module.exports = createJsonWebToken;
