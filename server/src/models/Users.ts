
import {Schema,model} from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser } from '../interfaces/IUser';


const userSchema: Schema = new Schema(
  {
    id: {type: String},
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, lowercase: true},
    password:{type: String, required: true, select: false},
    createdAt: {type: Date, default: Date.now}
  }
);

userSchema.pre('save',async function(next){
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

const users = model<IUser>('users', userSchema);

export default users;