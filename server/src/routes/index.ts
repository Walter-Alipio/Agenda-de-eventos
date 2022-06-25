import express from 'express';
import events from './eventsRoutes';



const routes = (app:express.Application) => {
  app.route('/').get((req,res)=>{
    res.status(200).send('Hello there!')
  })

  app.use(
    express.json(),
    events
  )
}

export default routes