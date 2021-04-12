import { Module } from '@nestjs/common';
import { AppController } from '../../controllers/app/app.controller';
import { AppService } from '../../service/app/app.service';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';
import path from "path";
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, "public"), //express.static(path.resolve(__dirname, "public"))
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }