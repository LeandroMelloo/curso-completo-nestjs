import { CreatePlayer } from './dtos/create-player.dto';
export declare class PlayersController {
    createUpdatePlayer(createPlayer: CreatePlayer): Promise<string>;
}
