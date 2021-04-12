import { Module } from "@nestjs/common";
import { StaffController } from "../../controllers/staff/staff.controller";
import { StaffService } from "../../service/staff/staff.service";

@Module({
    controllers:[StaffController],
    providers: [StaffService]
})

export class StaffModule {}