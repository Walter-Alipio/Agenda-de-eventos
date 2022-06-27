import express from 'express';
import authenticateRouter from './authenticateRoutes';
import eventRouter from './eventsRoutes';



const routes = (app:express.Application) => {
  app.route('/').get((req,res)=>{
    res.status(200).send('Hello there!')
  })

  app.use(
    express.json(),
    authenticateRouter,
    eventRouter
  )
}

export default routes