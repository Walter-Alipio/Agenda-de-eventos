import express from 'express';
import EventController from '../controllers/eventsController';

const router = express.Router();

router
  .get('/events',EventController.listAll)
  .get('/events/:id',EventController.listEventById)
  .post('/events',EventController.newEvent)
  .put('/events/:id', EventController.updateEvent)
  .delete('/events/:id', EventController.deleteEvent);

export default router