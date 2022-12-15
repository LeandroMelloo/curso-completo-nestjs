import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail/mail.service';

@Controller('api')
export class AppController {
  // inversão de depências: quando tenho uma classe que recebe suas depências através de um construtor
  constructor(private readonly mailService: MailService) {}

  @Get('send-email')
  getHello(): string {
    return this.mailService.sendEmail();
  }
}
