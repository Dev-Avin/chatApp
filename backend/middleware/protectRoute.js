import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
export const protectRoute = async (req, res, next) => {
 try {
  const token = req.cookies.jwt;
//console.log(token)
  if(!token){
    return res.status(401).json({error : "Unauthorized"})
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
//   console.log(decoded)
  if(!decoded){
    return res.status(401).json({error : "Unauthorized : Invalid Token"})
  }
  const user = await User.findById(decoded.userID).select("-password");
//   console.log(user)
  if(!user){
    return res.status(401).json({error : "No user found"})
  } 
  req.user = user;
  next();
}
 catch(error){
    res.status(500).json({error : "Internal Server Error"})
 }
}

