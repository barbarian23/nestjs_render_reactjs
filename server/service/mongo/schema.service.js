import { MongoClient } from "mongodb";
import { MONGODB_PROVIDER, MONGO_LINK } from "../../constants/mongo/mongo.consants";
import { Injectable, Dependencies } from '@nestjs/common';
import { Staff } from '../../model/staff.model';
import { Director } from '../../model/director.model';

@Injectable()
@Dependencies(getModelToken(Staff.name))
export class StaffsService {
  constructor(staffModel) { 
}

@Injectable()
@Dependencies(getModelToken(Director.name))
export class DirectorsService {
  constructor(directorModel) {
    this.directorModel = directorModel;
  }

  async create(createDirectorDto) {
    const createdDirector = new this.directorModel(createStaffDto);
    return createdDirector.save();
  }

  async findAll() {
    return this.directorModel.find().exec();
  }
}