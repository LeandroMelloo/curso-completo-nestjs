import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './interfaces/usuario.entity';
import { Usuario } from './interfaces/usuario.interface';

@Injectable()
export class AppService {
    constructor(@InjectRepository(UsuarioEntity) private usuarioRepository: Repository<UsuarioEntity>) {}

    async findAll(): Promise<UsuarioEntity[]> {
        return await this.usuarioRepository.find();
    }

    async find(usuarioId: number): Promise<Usuario> {
        const {id, nome, email, telefone, password } = await this.usuarioRepository.findOne(usuarioId);

        const response: Usuario = { id, nome, email, telefone, password };

        return response;
    }

    async create(usuario: Usuario): Promise<UsuarioEntity> {
        return this.usuarioRepository.save(usuario);
    }
}
