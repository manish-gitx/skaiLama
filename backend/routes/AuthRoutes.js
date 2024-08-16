import express from 'express';
import { signup, login, logout, getCurrentUser } from '../controllers/AuthController.js';
import { verifyUser } from '../middleware/verifyUser.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/verify', verifyUser, getCurrentUser);

export default router;