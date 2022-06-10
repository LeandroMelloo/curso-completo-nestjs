import { ApiProperty } from "@nestjs/swagger";

export class TelefoneDto {
    @ApiProperty()
    nome: string;

    @ApiProperty()
    telefone: string;
}