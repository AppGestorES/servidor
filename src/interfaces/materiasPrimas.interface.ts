export interface materiasPrimasInterface {
    id: number;
    nombre: string;
    caducidad: number;
    stock: number;
    id_proyecto: number;
}

export interface getMateriasPrimasInterface {
    id: number;
    nombre: string;
    caducidad: number;
    stock: number;
}

export interface postMateriasPrimasInterface {
    nombre: string;
    caducidad: number;
    stock: number;
    id_proyecto: number;
}
