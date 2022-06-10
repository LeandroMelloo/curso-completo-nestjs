import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { NotificacaoModule } from './notificacao/notificacao.module';

@Module({
  imports: [UsuariosModule, NotificacaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
