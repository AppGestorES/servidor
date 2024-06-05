export interface proveedoresInterface {
    id: number;
    nombre: string;
    id_proyecto: number;
}

export interface getProveedoresInterface {
    id: number;
    nombre: string;
    id_proyecto: number;
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
