import { proyectosInterface } from "./proyectos.interface";

export interface formulasInterface {
    id: number;
    nombre: string;
    caducidad: number;
}

export interface getFormulasInterface {
    id: number;
    nombre: string;
    caducidad: number;
    proyecto: proyectosInterface;
}

export interface postFormulasInterface {
    nombre: string;
    caducidad: number;
    id_proyecto: number;
}

export interface putFormulasInterface {
    id: number;
    nombre: string;
    caducidad: number;
    id_proyecto: number;
}
