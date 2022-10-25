import express from 'express';
import EventController from '../controllers/eventsController';
import { Auth } from '../middlewares/auth'

const eventRouter = express.Router();

const auth = new Auth();

eventRouter.use((req, res, next) => auth.authCheck(req,res, next));//verifica se o usuário possuí um token autenticado

eventRouter
  .get('/events',EventController.listAll)
  .get('/events/:id',EventController.listEventById)
  .post('/events',EventController.newEvent)
  .put('/events/:id', EventController.updateEvent)
  .delete('/events/:id', EventController.deleteEvent);

export default eventRouter;