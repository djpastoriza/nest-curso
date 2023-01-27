import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2'); // puedo declarar el prefijo de las api

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      // permite trasnformar los parametros del dto al tipo de dato que requiere
      transform:true,
      transformOptions:{
        enableImplicitConversion:true
      }
    })
  );

  await app.listen(process.env.PORT);
}
bootstrap();
