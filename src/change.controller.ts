import {Body, Controller, Get, HttpStatus, Post, Query, Redirect, Render, Res, UseGuards} from '@nestjs/common';
import {ChangeDTO} from "./change.dto";
import {PlayersService} from "./player.service";
import {AuthenticatedGuard} from "./common/guards/authenticated.guard";

@Controller('change')
export class ChangeController {
    constructor(
        private readonly playersService: PlayersService,
    ) {}

    @UseGuards(AuthenticatedGuard)
    @Get()
    @Render('form')
    getForm(@Query() query: any) {
        return {id: query.id};
    }

    @UseGuards(AuthenticatedGuard)
    @Post()
    @Redirect('/')
    async change(@Body() body : ChangeDTO, @Res() res: Response) {
        await this.playersService.changeBalance(body.id, body.cash);
    }
}