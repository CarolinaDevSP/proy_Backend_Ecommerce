
import express from 'express';
import * as userController from '../controllers/userController.js'
const router = express.Router();


router
  .route('/users')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/users/:id')
  .get(userController.getUserById)
  .put(userController.updateUserById)
  .delete(userController.deleteUserById);


export default router;