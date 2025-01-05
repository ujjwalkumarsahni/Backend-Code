// Importing required libraries
import express from 'express';  // Importing Express, a web framework for Node.js
import cors from 'cors';  // Importing CORS middleware to handle Cross-Origin Resource Sharing
import cookieParser from 'cookie-parser';  // Importing cookie-parser middleware to parse cookies in requests

// Creating an Express application
const app = express();

// Adding middleware to the Express app

// Enable CORS (Cross-Origin Resource Sharing)
// Allows requests from the origin specified in the environment variable `CORS_ORIGIN`
// The `credentials: true` option allows cookies to be included in cross-origin requests
app.use(cors({ 
    origin: process.env.CORS_ORIGIN,
    credentials: true 
}));

// Parse incoming JSON payloads with a size limit of 50MB
app.use(express.json({ limit: '50mb' }));

// Parse incoming URL-encoded data with extended syntax enabled
// The `limit` option restricts the maximum size of incoming data to 50MB
app.use(express.urlencoded({ extended: true, limit: '50mb' }));


// Serve static files from the 'public' directory
// This is typically used to serve assets like images, CSS files, or JavaScript files
app.use(express.static('public'));

// Parse cookies from incoming requests and make them available as an object in `req.cookies`
app.use(cookieParser());

// Export the configured app for use in other parts of the application
export default app;
