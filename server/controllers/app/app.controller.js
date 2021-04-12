import { Controller, Get, Dependencies, Req, Res, Bind, HttpStatus } from '@nestjs/common';
import { AppService } from '../../service/app/app.service';
import client from "../../client/client";
@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Get('/')
  @Bind(Req(), Res())
  async getHello(req, res) {
    await client(req, res);
    //return this.appService.getApp();
  }

}