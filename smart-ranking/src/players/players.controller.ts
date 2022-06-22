import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayer } from './dtos/create-player.dto';

@Controller('api/v1/')
export class PlayersController {

    @Post('players')
    async createUpdatePlayer(@Body() createPlayer: CreatePlayer) {
        const { email } = createPlayer
        return JSON.stringify(`{
            "email": ${email}
        }`)
    }
}
