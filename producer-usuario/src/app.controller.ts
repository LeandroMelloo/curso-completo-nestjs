import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { UsuarioEntity } from './interfaces/usuario.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private readonly logger = new Logger(AppController.name)

  @MessagePattern('find-all-user')
  async index(): Promise<UsuarioEntity[]> {
    return this.appService.findAll();
  }

  @MessagePattern('create-user')
  async create(@Payload() data:any): Promise<UsuarioEntity> {
    this.logger.log(`Usuario: ${JSON.stringify(data)}`) // No Kafka a mensagem é enviada e o consumidaor recebe um payload que é o data e dentro tem um value

    return await this.appService.create(data.value);
  }
}
