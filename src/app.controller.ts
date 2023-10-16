import {Controller, Get, Post, Redirect, Render, Req, Res, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import { PlayersService } from "./player.service";
import {LoginGuard} from "./common/guards/login.guard";
import {ExecutionContextHost} from "@nestjs/core/helpers/execution-context-host";

@Controller()
export class AppController {
  constructor(
    private readonly playersService: PlayersService,
  ) {}

  @Get()
  @Render('index')
  async root(@Req() req: any) {
    const players = await this.playersService.findAll();
    console.log(players);
    return { players: players, showButton: req.isAuthenticated() };
  }


  @Get('/login')
  @Render('login')
  index() {
    return;
  }

  @UseGuards(LoginGuard)
  @Post('/login')
  @Redirect('/')
  login(@Res() res: Response): void {
  }
}
