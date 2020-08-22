import { Schema, model, Document } from 'mongoose';

const STORY = new Schema({
  idAuth0:String,
  username:String,
  title: String,
  description: String,
  imagePath: String
});

interface IStory extends Document {
  idAuth0:string,
  username:string,
  title: string;
  description: string;
  imagePath: string;
}
export default model<IStory>('Photo', STORY);
