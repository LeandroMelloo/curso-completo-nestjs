import { Repository } from 'typeorm';
import { UsuarioEntity } from './database/usuario.entity';
import { Usuario } from './interfaces/usuarios.interfaces';
export declare class UsuarioService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<UsuarioEntity>);
    findAll(): Promise<UsuarioEntity[]>;
    create(usuario: Usuario): Promise<UsuarioEntity>;
}
