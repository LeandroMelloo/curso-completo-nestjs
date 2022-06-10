import { Body, Controller, Post } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { EmailDto } from './dtos/EmailDto';
import { TelefoneDto } from './dtos/TelefoneDto';

@Controller('notificacao')
export class NotificacaoController {
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

    @Post('email')
    sendEmail(@Body() data: EmailDto) {
        return this.client.emit('notificacao-email', data)
    }

    @Post('telefone')
    sendTelefone(@Body() data: TelefoneDto) {
        return this.client.emit('notificacao-telefone', data)
    }
}
