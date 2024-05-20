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
    token: string;
    fecha: number;
    usuario: number;
}

export interface putSesionesInterface {
    id: number;
    token: string;
    fecha: number;
    usuario: number;
}

export interface iniciarSesionInterface {
    usuario: string;
    contrasena: string;
}

export interface registrarSesionInterface {
    nombre: string;
    apellido: string;
    contrasena: string;
    identificador: string;
}