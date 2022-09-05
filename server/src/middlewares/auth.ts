import { Request, Response,NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const apikey = { 
  secret: process.env.API_KEY 
}

export default (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if(!authHeader) return res.status(401).send({error: 'O token não foi informado'})

  const parts = authHeader.split(' ');

  if(parts.length !== 2) return res.status(401).send({error: 'Token error'})

  const [scheme , token] = parts;

  if(!/^Bearer$/i.test(scheme)) return res.status(401).send({error: 'Formato de token inválido'})

  jwt.verify(token, apikey.secret!, (err, decoded )=> {

    if(err) return res.status(401).send({err: 'Token inválido'});

   (<any>req).userId = (<any>decoded).id;
    return next();
  })

}