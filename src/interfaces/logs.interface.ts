export interface logsInterface {
    id: number;
    fecha: number;
    tipo: string;
    mensaje: string;
    version: string;
    usuario: number;
}

export interface getLogsInterface {
    id: number;
    fecha: number;
    tipo: string;
    mensaje: string;
    version: string;
    usuario: number;
}

export interface postLogsInterface {
    fecha: number;
    tipo: string;
    mensaje: string;
    version: string;
    usuario: number;
}

export interface putLogsInterface {
    id: number;
    fecha: number;
    tipo: string;
    mensaje: string;
    version: string;
    usuario: number;
}
