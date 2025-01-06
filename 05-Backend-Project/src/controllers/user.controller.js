import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"; 
import {uploadOnCloudinary} from "../utils/cloudinary.js"; 
import {User} from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async (req, res, next) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res


    const {fullName,username,email,password} = req.body;
    console.log('Email' , email);

    if(fullName === '' || username === '' || email === '' || password === ''){
        throw new ApiError(400,'Please fill all the fields');
    }

    const existedUser = User.findOne({
        $or: [{ username }, { email }]
    })

    if(existedUser){
        throw new ApiError(409,'User already exists');
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;
    if(!avatarLocalPath){
        throw new ApiError(400,'Please upload an avatar');  
    }
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if(!avatar){
        throw new ApiError(500,'Failed to upload avatar');
    }

    const user = await User.create({
        fullName,
        username: username.toLowerCase(),
        email,
        password,
        avatar: avatar.url,
        coverImage: coverImage?.url || "" 
    })

    const createdUser = await User.findById(user._id).select('-password -refreshToken');

    if(!createdUser){
        throw new ApiError(500,'Failed to create user');
    }

    return res.status(201).json(
        new ApiResponse(201,createdUser,'User created successfully')    
    );
} )  

export { registerUser }; // Exporting the `registerUser` function so it can be used in other modules
