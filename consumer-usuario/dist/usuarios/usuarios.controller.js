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
exports.UsuariosController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const rxjs_1 = require("rxjs");
const usuario_dto_1 = require("./dtos/usuario.dto");
let UsuariosController = class UsuariosController {
    async onModuleInit() {
        const requestPatters = ['find-all-user', 'find-user'];
        requestPatters.forEach(async (pattern) => {
            this.client.subscribeToResponseOf(pattern);
            await this.client.connect();
        });
    }
    index() {
        return this.client.send('find-all-user', {});
    }
    find(id) {
        return this.client.send('find-user', { id });
    }
    create(usuario) {
        return this.client.emit('create-user', usuario);
    }
    update(id, { nome, email, telefone, password }) {
        const payload = { id, nome, email, telefone, password };
        return this.client.emit('update-user', payload);
    }
    remove(id) {
        return this.client.emit('delete-user', { id });
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
], UsuariosController.prototype, "client", void 0);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], UsuariosController.prototype, "index", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", rxjs_1.Observable)
], UsuariosController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: usuario_dto_1.UsuarioDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_dto_1.UsuarioDto]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiBody)({ type: usuario_dto_1.UsuarioDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, usuario_dto_1.UsuarioDto]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "remove", null);
UsuariosController = __decorate([
    (0, common_1.Controller)('usuario')
], UsuariosController);
exports.UsuariosController = UsuariosController;
//# sourceMappingURL=usuarios.controller.js.map