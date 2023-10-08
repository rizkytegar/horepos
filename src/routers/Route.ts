import express, { Request, Response } from 'express';

/**
 *  Import Controller
 */

const CreateJsonWebToken = require('../controller/CreateJsonWebToken');
import { RateLimitMiddleware } from '../library/RateLimit';

/**
 * Create an instance of the Express router to manage routes.
 */
const Route = express.Router();
 
/**
 * Rate Limit
 */

Route.use('/create-jwt', RateLimitMiddleware(30 * 60 * 1000, 5));

/**
 * Handle HTTP GET requests on the '/' route.
 * New Route Here....
 */ 

Route.get('/', (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'ExpressJs + JWT' });
});

Route.post('/create-jwt', CreateJsonWebToken);


/**
 * Export the router for use in other files.
 */
module.exports = Route;
