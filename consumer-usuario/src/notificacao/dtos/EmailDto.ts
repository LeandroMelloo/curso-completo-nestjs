import { ApiProperty } from "@nestjs/swagger";

export class EmailDto {
    @ApiProperty()
    nome: string;

    @ApiProperty()
    email: string;
}