//import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

const staffSchema = new mongoose.Schema({
   username: String,
   password: String,
});

export const Staff = mongoose.model('Staff', staffSchema);