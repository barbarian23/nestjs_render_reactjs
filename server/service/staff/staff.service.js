import { HttpStatus, Injectable} from '@nestjs/common';

@Injectable()
export class StaffService {
    async login(username,password){
        console.log("username",username,"password",password);
        return true;
      }

    async getLogin(){
      return "Hello world";//new Promise(res => res("Hello world"))
    }
}