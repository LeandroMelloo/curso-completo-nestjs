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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const usuario_entity_1 = require("./interfaces/usuario.entity");
let AppService = class AppService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async findAll() {
        return await this.usuarioRepository.find({ where: { status: 'ATIVADO' } });
    }
    async find(usuarioId) {
        const { id, nome, email, telefone, password, status } = await this.usuarioRepository.findOne(usuarioId);
        const response = { id, nome, email, telefone, password, status };
        return response;
    }
    async create(usuario) {
        return this.usuarioRepository.save(usuario);
    }
    async update(usuarioData) {
        const { id, nome, email, telefone, password } = usuarioData;
        const usuario = await this.find(id);
        usuario.nome = nome ? nome : usuario.nome;
        usuario.email = email ? email : usuario.email;
        usuario.telefone = telefone ? telefone : usuario.telefone;
        usuario.password = password ? password : usuario.password;
        await this.usuarioRepository.save(usuario);
    }
    async delete(id) {
        await this.usuarioRepository.delete({ id });
    }
    async activate(id) {
        await this.usuarioRepository.update(id, { status: 'ATIVADO' });
    }
    async inactivate(id) {
        await this.usuarioRepository.update(id, { status: 'INATIVADO' });
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.UsuarioEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map