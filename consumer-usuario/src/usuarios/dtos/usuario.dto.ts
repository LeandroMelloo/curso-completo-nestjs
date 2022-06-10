import { ApiProperty } from "@nestjs/swagger";

export class UsuarioDto {
    @ApiProperty()
    nome: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    telefone: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    status: 'ATIVADO' | 'INATIVADO';
}