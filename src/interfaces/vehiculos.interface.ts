export interface vehiculosInterface {
    id: number;
    matricula: string;
    id_proyecto: number;
}

export interface getVehiculosInterface {
    id: number;
    matricula: string;
    id_proyecto: number;
}

export interface postVehiculosInterface {
    matricula: string;
    id_proyecto: number;
}

export interface putVehiculosInterface {
    id: number;
    matricula: string;
    id_proyecto: number;
}
