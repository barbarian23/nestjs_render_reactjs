import '@babel/polyfill';
import { NestFactory } from '@nestjs/core';
import { AppModule } from "../server/modules/app/app.module";
import { PORT } from "../server/constants/app/app.constants";

// import compression from "compression";
// import express from "express";

// import path from "path";
// import client from "./client/client";
// const app = express();

// app.use(compression());

// app.use("/static", express.static(path.resolve(__dirname, "public")));

// app.get("/*", async (req, res) => {
//   console.log("url", req.url);
//   client(req, res);
// });

// const { PORT = 3000 } = process.env;

// app.listen(PORT, (PORT) => console.log("######## app running on port " + PORT + " ########"));

async function bootstrap(){
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}

bootstrap();