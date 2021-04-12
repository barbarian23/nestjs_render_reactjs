import { Get, Post, Body, Put, Bind, Delete, Query, Param, Header, Controller, Dependencies } from '@nestjs/common';
import { StaffService } from "../../service/staff/staff.service";

@Controller('staff')
@Dependencies(StaffService)
export class StaffController {

    constructor(staffService) {
        this.staffService = staffService;
    }

    @Get('/hello')
    getHello() {
        return this.staffService.getLogin();
    }

    @Post('/login')
    staffLogin() {
        return "Hello";
    }

}