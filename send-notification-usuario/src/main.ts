import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
        client: {
            clientId: 'notificacao',
            brokers: ['localhost:9092']
        },
        consumer: {
            groupId: 'notificacao-consumer',
            allowAutoTopicCreation: true
        }
    }
  });

  await app.listen();
  logger.log('Rodando microserviço de notificação com kafka...');
}
bootstrap();
