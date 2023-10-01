import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { PlayersService } from "./player.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly playersService: PlayersService,
  ) {}

  @Get()
  @Render('index')
  async root() {
    const players = await this.playersService.findAll();
    console.log(players);
    return { message: players };
  }
}
