import { proyectosInterface } from "./proyectos.interface";

export interface formatosInterface {
    id: number;
    nombre: string;
}

export interface getFormatosInterface {
    id: number;
    nombre: string;
    proyecto: proyectosInterface;
}

export interface postFormatosInterface {
    nombre: string;
    id_proyecto: number;
}

export interface putFormatosInterface {
    id: number;
    nombre: string;
    id_proyecto: number;
}
