import { Controller } from '@nestjs/common';
import { MessagePattern, Payload} from '@nestjs/microservices'
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('notificacao-email')
  async sendEmail(@Payload() data: any): Promise<void> {
    await this.appService.sendEmail(data.value.email, data.value.nome)
  }

  @MessagePattern('notificacao-telefone')
  sendTelefone(@Payload() data: any): void {
    console.log(data.value)
  }
}
