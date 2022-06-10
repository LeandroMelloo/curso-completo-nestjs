import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';

@Module({
  imports: [],
  controllers: [UsuariosController],
  providers: []
})
export class UsuariosModule {}
