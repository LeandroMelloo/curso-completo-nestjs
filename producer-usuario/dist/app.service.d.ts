import { Repository } from 'typeorm';
import { UsuarioEntity } from './interfaces/usuario.entity';
import { Usuario } from './interfaces/usuario.interface';
export declare class AppService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<UsuarioEntity>);
    findAll(): Promise<UsuarioEntity[]>;
    find(usuarioId: number): Promise<Usuario>;
    create(usuario: Usuario): Promise<UsuarioEntity>;
    update(usuarioData: UsuarioEntity): Promise<void>;
    delete(id: number): Promise<void>;
    activate(id: number): Promise<void>;
    inactivate(id: number): Promise<void>;
}
