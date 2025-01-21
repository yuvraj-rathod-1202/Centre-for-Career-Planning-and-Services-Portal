import express from 'express';
import userController from '../controllers/user.controller.js';
const router = express.Router();

const { signup, login, updateProfile, deleteProfile } = userController;

router.post('/signup', signup);

router.get('/login', login);

router.put('/updateProfile', updateProfile);

router.delete('/deleteProfile', deleteProfile);

export default router;