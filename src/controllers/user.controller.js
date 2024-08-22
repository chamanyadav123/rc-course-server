import { User } from "../models/user.model.js";
import { ApiError } from "../utility/ApiError.js";
import { ApiResponse } from "../utility/ApiResponse.js"
import {asyncHandler} from "../utility/asyncHandler.js"


export const registerUser = asyncHandler(async(req, res) => {
    const {fullName, email, phoneNumber, institute} = req.body

    // valldate the fields
    if([fullName, email, phoneNumber].some((field) => field === "")){
        throw new ApiError(404, "All fields are required") 
    }

    const options = {
      httpOnly: true,
      secure: true
  }

    // check is user already existed
    try {
      const existingUser = await User.findOne({email});
  
      if(existingUser){
          const accessToken = existingUser.generateAccessToken();
          return res.status(200)
          .cookie("accessToken", accessToken, options)
          .json(new ApiResponse(200, {existingUser, accessToken}, "User already exists"))
      }
  
  
      // register a new user
      const user = await User.create({
          fullName,
          email,
          phoneNumber,
          institute
      })
  
      const createdUser = await User.findById(user._id)
  
      // check if user registered ssuccessfully
      if(!createdUser){
          throw new ApiError(500, "something went wrong while registering a user")
      }
  
      const accessToken = createdUser.generateAccessToken();
  
      return res.status(200)
      .cookie("accessToken", accessToken, options)
      .json(new ApiResponse(200, {createdUser, accessToken}, "user registered successfully"))
  
    } catch (error) {
      console.log(error)
    }
})

