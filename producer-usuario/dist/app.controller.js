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
var AppController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const app_service_1 = require("./app.service");
let AppController = AppController_1 = class AppController {
    constructor(appService) {
        this.appService = appService;
        this.logger = new common_1.Logger(AppController_1.name);
    }
    async index() {
        return this.appService.findAll();
    }
    async find(data) {
        if (!Number(data.value.id)) {
            throw new common_1.NotFoundException('ID não encontrado');
        }
        const user = this.appService.find(Number(data.value.id));
        if (!user) {
            throw new common_1.NotFoundException('Usuário não encontrado');
        }
        return user;
    }
    async create(data) {
        this.logger.log(`Usuario: ${JSON.stringify(data)}`);
        return await this.appService.create(data.value);
    }
    async update(data) {
        this.logger.log(`Usuario: ${JSON.stringify(data)}`);
        return await this.appService.update(data.value);
    }
    async remove(data) {
        return this.appService.delete(Number(data.value.id));
    }
    async activate(data) {
        return this.appService.activate(Number(data.value.id));
    }
    async inactivate(data) {
        return this.appService.inactivate(Number(data.value.id));
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('find-all-user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "index", null);
__decorate([
    (0, microservices_1.MessagePattern)('find-user'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "find", null);
__decorate([
    (0, microservices_1.MessagePattern)('create-user'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('update-user'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('delete-user'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "remove", null);
__decorate([
    (0, microservices_1.MessagePattern)('activate-user'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "activate", null);
__decorate([
    (0, microservices_1.MessagePattern)('inactivate-user'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "inactivate", null);
AppController = AppController_1 = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map