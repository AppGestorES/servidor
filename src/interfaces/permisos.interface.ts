export interface GrupoInterface {
    id: number;
    nombre: string;
}

export interface PermisoInterface {
    id: number;
    nombre: string;
    descripcion: string;
}

export interface UsuarioConPermisosInterface {
    id: number;
    nombre: string;
    apellido: string;
    foto: string;
    identificador: string;
    id_proyecto: number;
    grupos: GrupoInterface[];
    permisos: PermisoInterface[];
}

export interface postGrupoInterface {
    nombre: string;
    id_proyecto: number;
}

export interface postGrupoPermisoInterface {
    grupo_id: number;
    permiso_id: number;
    id_proyecto: number;
}

export interface postUsuarioGrupoInterface {
    usuario_id: number;
    grupo_id: number;
    id_proyecto: number;
}

export interface postUsuarioPermisoInterface {
    usuario_id: number;
    permiso_id: number;
    id_proyecto: number;
}
