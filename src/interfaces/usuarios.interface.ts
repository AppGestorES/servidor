export interface usuariosInterface {
    id: number;
    nombre: string;
    apellido: string;
    foto: string;
    contrasena: string;
    identificador: string;
    id_proyecto: number;
}

export interface getUsuariosInterface {
    id: number;
    nombre: string;
    apellido: string;
    foto: string;
    identificador: string;
    id_proyecto: number;
}

export interface postUsuariosInterface {
    nombre: string;
    apellido: string;
    foto: string;
    contrasena: string;
    identificador: string;
    id_proyecto: number;
}

export interface putUsuariosInterface {
    id: number;
    nombre: string;
    apellido: string;
    foto: string;
    contrasena: string;
    identificador: string;
    id_proyecto: number;
}