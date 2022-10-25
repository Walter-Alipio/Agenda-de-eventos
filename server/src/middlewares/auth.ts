import { Request, Response,NextFunction } from 'express';
import {sign, verify} from 'jsonwebtoken';

export class Auth {
  
  constructor(
    private secret = <string>process.env.API_KEY,
  ){}

  public authCheck (req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers.authorization;

    if(!authHeader) return res.status(401).send({error: 'O token não foi informado'})

    const parts = authHeader.split(' ');

    if(parts.length !== 2) return res.status(401).send({error: 'Token error'})

    const [scheme , token] = parts;

    if(!/^Bearer$/i.test(scheme)) return res.status(401).send({error: 'Formato de token inválido'})

    verify(token, this.secret, (err, decoded )=> {

      if(err) return res.status(401).send({err: 'Token inválido'});

      (<any>req).userId = (<any>decoded).id;
      return next();
    })
  }

  public generateToken(params: Request["params"] = {}): string | Error{

     return  sign(params, this.secret, {
          expiresIn: 86400,
        })
  }
}
