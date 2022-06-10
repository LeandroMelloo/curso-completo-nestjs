import { Body, Controller, Delete, Get, OnModuleInit, Param, Post, Put } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { ApiBody } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { Usuario } from './interfaces/usuario.interface';
import { UsuarioDto } from './dtos/usuario.dto';

@Controller('usuario')
export class UsuariosController implements OnModuleInit{
    @Client({
        transport: Transport.KAFKA,
        options: {
            client: {
                clientId: 'usuario',
                brokers: ['localhost:9092'],
            },
            consumer: {
                groupId: 'usuario-consumer',
                allowAutoTopicCreation: true
            }
        }
    })

    private client: ClientKafka

    async onModuleInit() {
        const requestPatters = ['find-all-user', 'find-user'];

        requestPatters.forEach(async pattern => {
            this.client.subscribeToResponseOf(pattern); // esperando a mensagem ser respondida pelo Kafka
            await this.client.connect()
        })
    }

    // index
    @Get()
    index(): Observable<Usuario[]> {
        return this.client.send('find-all-user', {});
    }

    // find
    @Get(':id')
    find(@Param('id') id: number): Observable<Usuario> {
        return this.client.send('find-user', {id});
    }

    // create
    @Post()
    @ApiBody({ type: UsuarioDto })
    create(@Body() usuario: UsuarioDto) {
        return this.client.emit('create-user', usuario);
    }

    // update
    @Put(':id')
    @ApiBody({ type: UsuarioDto })
    update(@Param('id') id: number, @Body() {nome, email, telefone, password}: UsuarioDto) {
        const payload = { id, nome, email, telefone, password }

        return this.client.emit('update-user', payload);
    }

    // delete
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.client.emit('delete-user', {id});
    }
}
