import { Injectable } from '@nestjs/common';
import { SendGridService } from '@anchan828/nest-sendgrid';

@Injectable()
export class AppService {
  constructor(private readonly sendGrid: SendGridService) {}

  async sendEmail(email: string, nome: string): Promise<void> {
    await this.sendGrid.send({
      to: email,
      from: process.env.FROM_EMAIL,
      subject: 'Usuario Criado',
      text: `Olá ${nome}, seu usuario foi criado com sucesso!`,
      html: `<strong>Olá ${nome}, seu usuario foi criado com sucesso!</strong>`
    })
  }
}
