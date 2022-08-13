
import {Schema,model, Document} from 'mongoose';

export interface IEvent extends Document {
    id: string,
    name: string,
    date: Date,
    start: string,
    end: string,
    description: string,
    owner: Schema.Types.ObjectId
}

const eventSchema: Schema = new Schema(
  {
    id: {type: String},
    name: {type: String, required: true},
    date: {type: Date, required: true},
    start: {type: String, required: true},
    end: {type: String, required: true},
    description: {type: String, required: true},
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    }
  }
);

const events = model<IEvent>('events', eventSchema);

export default events;