import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { MailService } from './mail/mail.service';
import { SMTPMailService } from './mail/smtp-mail.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: MailService,
          useClass: SMTPMailService
        }
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "SMTP Mail"', () => {
      expect(appController.getHello()).toBe('SMTP Mail');
    });
  });
});
