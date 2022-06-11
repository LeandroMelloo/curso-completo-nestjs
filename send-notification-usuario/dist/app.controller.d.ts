import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    sendEmail(data: any): Promise<void>;
    sendTelefone(data: any): void;
}
