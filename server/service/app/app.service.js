import { Injectable } from '@nestjs/common';

@Injectable()
   
export class AppService {
  getApp(){
    return 'Hello World!';
  }
}