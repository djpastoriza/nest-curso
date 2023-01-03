import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // solo permite data que yo estoy esperando en el DTO
      forbidNonWhitelisted: true, // marca error si se envia un parametro que no corresponda en el DTO
    })
  );

  await app.listen(3000);
}
bootstrap();
