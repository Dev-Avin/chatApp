import express from 'express';
const router = express.Router();
import {signupUser , login , logout} from '../controllers/auth.controlers.js';
router.post('/login' , login);
router.post('/logout' , logout);
router.post('/signup' , signupUser);

export default router;