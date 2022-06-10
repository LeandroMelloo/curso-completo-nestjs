import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './interfaces/usuario.entity';
import { Usuario } from './interfaces/usuario.interface';

@Injectable()
export class AppService {
    constructor(@InjectRepository(UsuarioEntity) private usuarioRepository: Repository<UsuarioEntity>) {}

    async findAll(): Promise<UsuarioEntity[]> {
        return await this.usuarioRepository.find({ where: {status: 'ATIVADO' }});
    }

    async find(usuarioId: number): Promise<Usuario> {
        const {id, nome, email, telefone, password, status } = await this.usuarioRepository.findOne(usuarioId);

        const response: Usuario = { id, nome, email, telefone, password, status };

        return response;
    }

    async create(usuario: Usuario): Promise<UsuarioEntity> {
        return this.usuarioRepository.save(usuario);
    }

    async update(usuarioData: UsuarioEntity): Promise<void> {
        const { id, nome, email, telefone, password } = usuarioData;

        const usuario = await this.find(id)

        usuario.nome = nome ? nome : usuario.nome
        usuario.email = email ? email : usuario.email
        usuario.telefone = telefone ? telefone : usuario.telefone
        usuario.password = password ? password : usuario.password

        await this.usuarioRepository.save(usuario)
    }

    async delete(id: number): Promise<void> {
        await this.usuarioRepository.delete({ id })
    }

    async activate(id: number): Promise<void> {
        await this.usuarioRepository.update(id, { status: 'ATIVADO' }) // { status: 'ATIVADO } é igual um where
    }

    async inactivate(id: number): Promise<void> {
        await this.usuarioRepository.update(id, { status: 'INATIVADO' }) // { status: 'INATIVADO } é igual um where
    }
}
