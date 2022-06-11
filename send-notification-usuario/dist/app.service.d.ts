import { SendGridService } from '@anchan828/nest-sendgrid';
export declare class AppService {
    private readonly sendGrid;
    constructor(sendGrid: SendGridService);
    sendEmail(email: string, nome: string): Promise<void>;
}
