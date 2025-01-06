import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req, res, next) => {
    res.status(200).json({
        message: "User registered successfully"
    })
} )  

export { registerUser }; // Exporting the `registerUser` function so it can be used in other modules
