"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificacaoController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const EmailDto_1 = require("./dtos/EmailDto");
const TelefoneDto_1 = require("./dtos/TelefoneDto");
let NotificacaoController = class NotificacaoController {
    sendEmail(data) {
        return this.client.emit('notificacao-email', data);
    }
    sendTelefone(data) {
        return this.client.emit('notificacao-telefone', data);
    }
};
__decorate([
    (0, microservices_1.Client)({
        transport: microservices_1.Transport.KAFKA,
        options: {
            client: {
                clientId: 'usuario',
                brokers: ['localhost:9092'],
            },
            consumer: {
                groupId: 'usuario-consumer',
                allowAutoTopicCreation: true
            }
        }
    }),
    __metadata("design:type", microservices_1.ClientKafka)
], NotificacaoController.prototype, "client", void 0);
__decorate([
    (0, common_1.Post)('email'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EmailDto_1.EmailDto]),
    __metadata("design:returntype", void 0)
], NotificacaoController.prototype, "sendEmail", null);
__decorate([
    (0, common_1.Post)('telefone'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TelefoneDto_1.TelefoneDto]),
    __metadata("design:returntype", void 0)
], NotificacaoController.prototype, "sendTelefone", null);
NotificacaoController = __decorate([
    (0, common_1.Controller)('notificacao')
], NotificacaoController);
exports.NotificacaoController = NotificacaoController;
//# sourceMappingURL=notificacao.controller.js.map