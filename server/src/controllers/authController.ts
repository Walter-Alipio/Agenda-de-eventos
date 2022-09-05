import users from '../models/Users'
import mongoose from 'mongoose'
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const secret = process.env.API_KEY;


const generateToken = (params: Request["params"] = {}) => {
  return  jwt.sign(params, secret!, {
          expiresIn: 86400,
        })
}

class AuthController {

  static newUser = async  (req: Request, res: Response) =>{

    const {email} = await req.body;
    if(await users.findOne({email}))
     return res.status(400).send({error: 'E-mail já cadastrado'})

    const user = await new users(req.body)

    
    await user.save((err: mongoose.CallbackError)=>{
      let userSend;

        err ? 
          res.status(500).send({message: `${err.message} - falha ao cadastrar usuário`}) 
          :
          user.password = undefined;
          res.status(200).send({
            userSend,
            token: generateToken({id: user._id}),
          })

      })
  }

  static authenticateUser = async (req: Request, res: Response) =>{

    try{
      const { email , password } = await req.body

      const user = await users.findOne({ email }).select('+password').exec();

      if(!user)
        return res.status(400).send({error: 'Usuário não encontrado'});

      if(!await bcrypt.compare(password, user.password)) 
        return res.status(400).send({error: 'Dados inválidos!'});
        
        
        const userSend = {
          id: user._id,
          name: user.name,
          email: user.email
        }

      return res.send({
        userSend, 
        token: generateToken({id: user._id}),
      })  
    }catch(err){
      return res.status(400).send({err})
    }

  }
}

export default AuthController;