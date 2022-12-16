import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  // injeção de dependências
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
