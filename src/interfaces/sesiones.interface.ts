export interface sesionesInterface {
    id: number;
    token: string;
    fecha: number;
    usuario: number;
}

export interface getSesionesInterface {
    id: number;
    token: string;
    fecha: number;
    usuario: number;
}

export interface postSesionesInterface {
    fecha: number;
    usuario: number;
}

export interface putSesionesInterface {
    id: number;
    token: string;
    fecha: number;
    usuario: number;
}