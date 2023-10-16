import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import session from "express-session";
import passport from "passport";
import flash from 'connect-flash';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
  );
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.set('view options', { layout: 'layouts/main' });

  app.use(
      session({
        secret: 'nest cats',
        resave: false,
        saveUninitialized: false,
      }),
  );

  app.use(passport.initialize())
  app.use(passport.session());
  app.use(flash());
  await app.listen(3000);
}
bootstrap();
