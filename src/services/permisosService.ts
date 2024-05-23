const getPermisosService: string = "SELECT id, nombre, descripcion, id_proyecto FROM permisos";
const getPermisosByNombreService: string = "SELECT id, nombre, descripcion, id_proyecto FROM permisos WHERE nombre LIKE ?";
const getPermisosByProyectoService: string = "SELECT id, nombre, descripcion, id_proyecto FROM permisos WHERE id_proyecto = ?";
const postPermisosService: string = "INSERT INTO permisos (nombre, descripcion, id_proyecto) VALUES (?, ?, ?)";
const putPermisosService: string = "UPDATE permisos SET nombre = ?, descripcion = ?, id_proyecto = ? WHERE id = ?";
const deletePermisosService: string = "DELETE FROM permisos WHERE id = ?";

export { getPermisosService, getPermisosByNombreService, getPermisosByProyectoService, postPermisosService, putPermisosService, deletePermisosService };
