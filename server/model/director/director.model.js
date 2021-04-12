import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

const directorSchema = new Schema({
    username: String,
    password: String,
 });
 
 export const Director = mongoose.model('Director', directorSchema);

