import { proyectosInterface } from "./proyectos.interface";

export interface proveedoresInterface {
    id: number;
    nombre: string;
}

export interface getProveedoresInterface {
    id: number;
    nombre: string;
    proyecto: proyectosInterface;
}

export interface postProveedoresInterface {
    nombre: string;
    id_proyecto: number;
}

export interface putProveedoresInterface {
    id: number;
    nombre: string;
    id_proyecto: number;
}
