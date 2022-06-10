import { OnModuleInit } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Usuario } from './interfaces/usuario.interface';
import { UsuarioDto } from './dtos/usuario.dto';
export declare class UsuariosController implements OnModuleInit {
    private client;
    onModuleInit(): Promise<void>;
    index(): Observable<Usuario[]>;
    find(id: number): Observable<Usuario>;
    create(usuario: UsuarioDto): Observable<any>;
    update(id: number, { nome, email, telefone, password }: UsuarioDto): Observable<any>;
    remove(id: number): Observable<any>;
}
