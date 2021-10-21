import { Schema, model} from 'mongoose';
interface Task {
  description: string;
  completed: boolean;
  
}
const schema = new Schema<Task>({
  description: { type: String, required: true },
  completed: { type: Boolean, required: true },
 
});

export const UserModel = model<Task>('User', schema);