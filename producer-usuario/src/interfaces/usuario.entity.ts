import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nome: string;

    @Column()
    email: string;

    @Column()
    telefone: string;

    @Column()
    password: string;
}