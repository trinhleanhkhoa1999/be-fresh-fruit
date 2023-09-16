/** @format */

import * as session from 'express-session';
import * as passport from 'passport';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Running on port localhost:3456');
  console.log('Swagger on port localhost:3456/api');
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 },
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.useGlobalPipes(
    new ValidationPipe({
      // field dont have in dto will be remove from request BE
      whitelist: true,
    })
  );
  const config = new DocumentBuilder()
    .setTitle('One Drink And Food')
    .setDescription('The ONE API description')
    .setVersion('1.0')
    .addTag('version 1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // http://localhost:3001/api
  SwaggerModule.setup('api', app, document);

  await app.listen(3456);
}
bootstrap();
