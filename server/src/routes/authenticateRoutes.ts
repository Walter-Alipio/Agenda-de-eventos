import express from 'express';
import AuthController from '../controllers/authController'

const authenticateRouter = express.Router();

authenticateRouter
  .post('/register',AuthController.newUser)
  .post('/authenticate', AuthController.authenticateUser);

export default authenticateRouter;