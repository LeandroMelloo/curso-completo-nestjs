import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayer } from './dtos/create-player.dto';
import { Player } from './interfaces/player.interface';

@Injectable()
export class PlayersService {

    private players: Player[] = [];
    
    private readonly Logger = new Logger(PlayersService.name)

    async createUpdatePlayer(createPlayer: CreatePlayer) {

        this.Logger.log(`createPlayer: ${createPlayer}`)

    }

    //private create(createPlayer: CreatePlayer)

}
