class ApiError extends Error {
    constructor(
        statusCode, // HTTP status code (e.g., 400 for Bad Request, 500 for Internal Server Error)
        message = "Something went wrong", // Default error message if not provided
        errors = [], // Additional details about the error, typically an array
        stack = "" // Stack trace for debugging; optional
    ) {
        super(message); // Call the parent class (Error) constructor with the message
        this.statusCode = statusCode; // HTTP status code for the error
        this.data = null; // Placeholder for any additional data related to the error
        this.message = message; // Custom error message
        this.success = false; // Indicate the failure of the operation
        this.errors = errors; // Array or list of specific errors (e.g., validation errors)

        // Handle the stack trace:
        if (stack) {
            this.stack = stack; // Use the provided stack trace if available
        } else {
            Error.captureStackTrace(this, this.constructor); // Capture stack trace if none is provided
        }
    }
}

// Exporting the class for use in other modules
export { ApiError };
