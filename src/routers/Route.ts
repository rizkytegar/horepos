import express, { Request, Response } from 'express';

/**
 * Create an instance of the Express router to manage routes.
 */
const Route = express.Router();

/**
 * Handle HTTP GET requests on the '/' route.
 * New Route Here....
 */ 

Route.get('/', (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'ExpressJs + JWT' });
});



/**
 * Export the router for use in other files.
 */
module.exports = Route;
