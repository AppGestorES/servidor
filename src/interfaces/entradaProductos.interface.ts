import { proyectosInterface } from "./proyectos.interface";
import { envasadosInterface } from "./envasados.interface";
import { operariosInterface } from "./operarios.interface";

export interface getEntradasInterface {
    id: number;
    producto_final_id: number;
    fecha_entrada: string;
    proveedor: string;
    numero_albaran: string;
    numero_lote: string;
    cantidad_kg: number;
    fecha_caducidad: string;
    envasado: envasadosInterface;
    operario: operariosInterface;
    proyecto: proyectosInterface;
}

export interface postEntradasInterface {
    producto_final_id: number;
    fecha_entrada: string;
    proveedor: string;
    numero_albaran: string;
    numero_lote: string;
    cantidad_kg: number;
    fecha_caducidad: string;
    envasado_id: number;
    operario_id: number;
    id_proyecto: number;
}

export interface putEntradasInterface extends postEntradasInterface {
    id: number;
}
