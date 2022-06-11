import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { SendGridModule } from '@anchan828/nest-sendgrid';
import { AppController } from './app.controller';
import { AppService } from './app.service';

console.log(process.env.SEND_GRID_API_KEY)
@Module({
  imports: [ConfigModule.forRoot(), SendGridModule.forRoot({
    apikey: process.env.SEND_GRID_API_KEY
    
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
