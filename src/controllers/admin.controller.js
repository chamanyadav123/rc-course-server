import { User } from "../models/user.model.js";
import {asyncHandler} from "../utility/asyncHandler.js"


export const getUsers = asyncHandler(async(req, res)=> {

  try {
      // Fetch all users from the database
      const users = await User.find({});
  
      // If users are found, send them in the response
      if (users.length > 0) {
        res.status(200).json(users);
      } else {
        // If no users are found, send an empty array
        res.status(200).json([]);
      }
    } catch (error) {
      // Handle errors and send a server error response
      res.status(500).json({ message: 'Server error', error: error.message });
    }
})