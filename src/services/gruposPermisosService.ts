const getGruposPermisosService: string = "SELECT grupo_id, permiso_id, id_proyecto FROM grupos_permisos";
const getGruposPermisosByGrupoService: string = "SELECT grupo_id, permiso_id, id_proyecto FROM grupos_permisos WHERE grupo_id = ?";
const getGruposPermisosByPermisoService: string = "SELECT grupo_id, permiso_id, id_proyecto FROM grupos_permisos WHERE permiso_id = ?";
const getGruposPermisosByProyectoService: string = "SELECT grupo_id, permiso_id, id_proyecto FROM grupos_permisos WHERE id_proyecto = ?";
const postGruposPermisosService: string = "INSERT INTO grupos_permisos (grupo_id, permiso_id, id_proyecto) VALUES (?, ?, ?)";
const deleteGruposPermisosService: string = "DELETE FROM grupos_permisos WHERE grupo_id = ? AND permiso_id = ?";

export { getGruposPermisosService, getGruposPermisosByGrupoService, getGruposPermisosByPermisoService, getGruposPermisosByProyectoService, postGruposPermisosService, deleteGruposPermisosService };
