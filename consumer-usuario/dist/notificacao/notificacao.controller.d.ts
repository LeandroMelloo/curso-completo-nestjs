import { EmailDto } from './dtos/EmailDto';
import { TelefoneDto } from './dtos/TelefoneDto';
export declare class NotificacaoController {
    private client;
    sendEmail(data: EmailDto): import("rxjs").Observable<any>;
    sendTelefone(data: TelefoneDto): import("rxjs").Observable<any>;
}
