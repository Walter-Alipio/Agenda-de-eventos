import events, {IEvent} from '../models/Events'
import mongoose from 'mongoose'
import { Request, Response } from 'express';

class EventController{

  static listAll =  (req: Request, res: Response) =>{
       events.find((err , events)=>{
      res.status(200).json(events)
   })
  }

  static listEventById = async (req: Request, res: Response) => {
       const _id = await req.params.id;
        events.findById(_id,(err: mongoose.CallbackError, event: IEvent )=>{
        err ? res.status(400).send({message: `${err.message} - Id não localizado`}) 
        :
        res.status(200).send(event)
       })
  }

  static newEvent = async (req: Request, res: Response) =>{ 
      let {name, date, start, end, description} = await req.body;
      date = new Date(date);
      //transformando em tipo Date para armazenar no bd
      let event = new events({name, date, start, end, description});
      
       event.save((err: mongoose.CallbackError)=>{

        err ? res.status(500).send({message: `${err.message} - falha ao cadastrar evento`}) :
          res.status(200).send(event.toJSON())

      })
   }

   static updateEvent = async (req: Request, res: Response) => {
      const id = await req.params.id;
       let { date } = await req.body;
       req.body.date = new Date(date);
      events.findByIdAndUpdate(id,{$set: req.body}, (err: mongoose.CallbackError)=>{
         !err ? 
            res.status(200).send({message: 'Atualizado com sucesso!'}) :
            res.status(500).send({message: `${err.message} - Id não encontrado`})
      })
   }

   static deleteEvent = async (req: Request, res: Response) => {
      const id = await req.params.id;

       events.findByIdAndDelete(id,(err: mongoose.CallbackError)=>{
        !err ? 
          res.status(200).send({message: 'Evento excluído'}):
          res.status(500).send({message: `${err.message} - Id não encontrado`});
      })
   }
}

export default EventController;