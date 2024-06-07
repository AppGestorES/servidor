import { proyectosInterface } from "./proyectos.interface";

export interface productosFinalesInterface {
    id: number;
    nombre: string;
    formula_id: number;
    caducidad: number;
}

export interface getProductosFinalesInterface {
    id: number;
    nombre: string;
    formula_id: number;
    caducidad: number;
    proyecto: proyectosInterface;
}

export interface postProductosFinalesInterface {
    nombre: string;
    formula_id: number;
    caducidad: number;
    id_proyecto: number;
}

export interface putProductosFinalesInterface {
    id: number;
    nombre: string;
    formula_id: number;
    caducidad: number;
    id_proyecto: number;
}
