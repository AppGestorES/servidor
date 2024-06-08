import { proyectosInterface } from "./proyectos.interface";

export interface usuariosInterface {
    id: number;
    nombre: string;
    apellido: string;
    foto: string;
    contrasena: string;
    identificador: string;
    es_admin: number;
    proyecto_admin: number;
}

export interface getUsuariosInterface {
    id: number;
    nombre: string;
    apellido: string;
    foto: string;
    identificador: string;
    proyecto: proyectosInterface;
    es_admin: number;
    proyecto_admin: number;
}

export interface postUsuariosInterface {
    nombre: string;
    apellido: string;
    contrasena: string;
    identificador: string;
}

export interface putUsuariosInterface {
    id: number;
    nombre: string;
    apellido: string;
    foto: string;
    contrasena: string;
    identificador: string;
    id_proyecto: number;
    es_admin: number;
    proyecto_admin: number;
}
