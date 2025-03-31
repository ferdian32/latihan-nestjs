import "dotenv/config"

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from "@nestjs/common";
async function bootstrap() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT ?? 3000);
  Logger.log(`Server is running on localhost:${PORT}`,'Running Port')
}
bootstrap();
