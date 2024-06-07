import { destinosInterface } from "./destinos.interface";
import { envasadosInterface } from "./envasados.interface";
import { formatosInterface } from "./formatos.interface";
import { proyectosInterface } from "./proyectos.interface";
import { vehiculosInterface } from "./vehiculos.interface";

export interface salidaProductosInterface {
    id: number;
    producto_final_id: number;
    formula_id: number;
    numero_lote: string;
    fecha_salida: number;
    cantidad: number;
    fecha_caducidad: number;
    envasado_id: envasadosInterface;
    formato_id: formatosInterface;
    destino_id: destinosInterface;
    vehiculo_id: vehiculosInterface;
}

export interface getSalidaProductosInterface {
    id: number;
    producto_final_id: number;
    formula_id: number;
    numero_lote: string;
    fecha_salida: number;
    cantidad: number;
    fecha_caducidad: number;
    envasado_id: envasadosInterface;
    formato_id: formatosInterface;
    destino_id: destinosInterface;
    vehiculo_id: vehiculosInterface;
    proyecto: proyectosInterface;
}

export interface postSalidaProductosInterface {
    producto_final_id: number;
    formula_id: number;
    numero_lote: string;
    fecha_salida: number;
    cantidad: number;
    fecha_caducidad: number;
    envasado_id: number;
    formato_id: number;
    destino_id: number;
    vehiculo_id: number;
    id_proyecto: number;
}

export interface putSalidaProductosInterface {
    id: number;
    producto_final_id: number;
    formula_id: number;
    numero_lote: string;
    fecha_salida: number;
    cantidad: number;
    fecha_caducidad: number;
    envasado_id: number;
    formato_id: number;
    destino_id: number;
    vehiculo_id: number;
    id_proyecto: number;
}
