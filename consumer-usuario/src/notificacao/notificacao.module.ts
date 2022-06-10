import { Module } from '@nestjs/common';
import { NotificacaoController } from './notificacao.controller';

@Module({
  controllers: [NotificacaoController]
})
export class NotificacaoModule {}
