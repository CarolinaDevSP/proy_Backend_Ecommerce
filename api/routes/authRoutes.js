import express from 'express'
import { login, register } from '../controllers/authController.js';
import createUserValidator from '../middelwares/createUserValidator.js';
import loginValidator  from '../middelwares/loginValidator.js';


const router = express.Router()

/**
 * dos rutas
 * POST / PUT
 */

router.post('/register', createUserValidator,register),
router.post('/login', loginValidator, login);

export default router;