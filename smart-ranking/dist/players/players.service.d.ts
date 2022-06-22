import { CreatePlayer } from './dtos/create-player.dto';
export declare class PlayersService {
    private players;
    private readonly Logger;
    createUpdatePlayer(createPlayer: CreatePlayer): Promise<void>;
}
