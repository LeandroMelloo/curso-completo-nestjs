export interface Usuario {
    id?: number;
    nome: string;
    email: string;
    telefone: string;
    password: string;
    status?: 'ATIVADO' | 'INATIVADO';
}
