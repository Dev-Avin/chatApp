import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controls.js";
import User from "../models/user.model.js"; // Import the User model
const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
export default router;
