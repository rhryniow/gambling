import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersService } from './player.service';
import { Player } from './player.entity';
import {ChangeController} from "./change.controller";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: '10.0.0.10',
      port: 3307,
      username: 'root',
      password: '9miliardow',
      database: 'gambling',
      entities: [Player],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Player]),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, ChangeController],
  providers: [AppService, PlayersService],
})
export class AppModule {}
