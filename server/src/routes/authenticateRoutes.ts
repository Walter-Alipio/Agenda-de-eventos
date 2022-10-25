import express from 'express';
import UserController from '../controllers/UserController'

const authenticateRouter = express.Router();

authenticateRouter
  .post('/register',UserController.newUser)
  .post('/authenticate', UserController.authenticateUser);

export default authenticateRouter;