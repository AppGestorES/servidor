const getUsuariosPermisosService: string = "SELECT usuario_id, permiso_id, id_proyecto FROM usuarios_permisos";
const getUsuariosPermisosByUsuarioService: string = "SELECT usuario_id, permiso_id, id_proyecto FROM usuarios_permisos WHERE usuario_id = ?";
const getUsuariosPermisosByPermisoService: string = "SELECT usuario_id, permiso_id, id_proyecto FROM usuarios_permisos WHERE permiso_id = ?";
const getUsuariosPermisosByProyectoService: string = "SELECT usuario_id, permiso_id, id_proyecto FROM usuarios_permisos WHERE id_proyecto = ?";
const postUsuariosPermisosService: string = "INSERT INTO usuarios_permisos (usuario_id, permiso_id, id_proyecto) VALUES (?, ?, ?)";
const deleteUsuariosPermisosService: string = "DELETE FROM usuarios_permisos WHERE usuario_id = ? AND permiso_id = ?";

export { getUsuariosPermisosService, getUsuariosPermisosByUsuarioService, getUsuariosPermisosByPermisoService, getUsuariosPermisosByProyectoService, postUsuariosPermisosService, deleteUsuariosPermisosService };
