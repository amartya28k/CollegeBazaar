import express from 'express';
import { login, requestOtp, verifyOtpAndSignup} from '../controllers/authController.js';

const router = express.Router();

router.post('/login', login);
router.post('/request-otp', requestOtp);
router.post('/verify-otp', verifyOtpAndSignup);

export default router;
