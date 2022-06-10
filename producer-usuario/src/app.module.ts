import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsuarioEntity } from './interfaces/usuario.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
