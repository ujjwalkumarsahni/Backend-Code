class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode; // HTTP status code (e.g., 200 for OK, 404 for Not Found)
        this.data = data; // The main response data (e.g., fetched results, objects, etc.)
        this.message = message; // A descriptive message for the response
        this.success = statusCode < 400; // A boolean indicating whether the response signifies success
    }
}

// Exporting the class for use in other modules
export { ApiResponse };
