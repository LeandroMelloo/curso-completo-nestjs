import { AppService } from './app.service';
import { UsuarioEntity } from './interfaces/usuario.entity';
import { Usuario } from './interfaces/usuario.interface';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    private readonly logger;
    index(): Promise<UsuarioEntity[]>;
    find(data: any): Promise<Usuario>;
    create(data: any): Promise<UsuarioEntity>;
    update(data: any): Promise<void>;
    remove(data: any): Promise<void>;
    activate(data: any): Promise<void>;
    inactivate(data: any): Promise<void>;
}
