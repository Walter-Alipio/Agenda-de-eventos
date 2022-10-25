import users from '../models/Users'
import mongoose, { Model } from 'mongoose'
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { Auth } from '../middlewares/auth';

class UserController {

  private static findOne(email:string){
    return users.findOne({email});
  }

  static newUser = async  (req: Request, res: Response) =>{

    const {email} = await req.body;
    if(await this.findOne(email))
     return res.status(400).send({error: 'E-mail já cadastrado'})

    const user = await new users(req.body)

    const authenticate = new Auth()
    await user.save((err: mongoose.CallbackError)=>{

      let userSend;

        err ? 
          res.status(500).send({message: `${err.message} - falha ao cadastrar usuário`}) 
          :
          user.password = undefined;
          res.status(200).send({
            userSend,
            token: authenticate.generateToken({id: user._id}),
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

      const authenticate = new Auth()

      return res.send({
        userSend, 
        token: authenticate.generateToken({id: user._id.toString()}),
      })  
    }catch(err){
      return res.status(400).send({err})
    }

  }
}

export default UserController;