import { Body, Controller, Get, OnModuleInit, Param, Post } from '@nestjs/common';
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
}
