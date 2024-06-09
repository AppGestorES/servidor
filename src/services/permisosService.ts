const getGruposService: string = "SELECT id, nombre, id_proyecto FROM grupos";
const getPermisosService: string = "SELECT id, nombre, descripcion, id_proyecto FROM permisos";
const getGruposPermisosService: string = "SELECT g.id as grupo_id, g.nombre as grupo_nombre, p.id as permiso_id, p.nombre as permiso_nombre, p.descripcion as permiso_descripcion FROM grupos g LEFT JOIN grupos_permisos gp ON g.id = gp.grupo_id LEFT JOIN permisos p ON gp.permiso_id = p.id";
const postGruposService: string = "INSERT INTO grupos (nombre, id_proyecto) VALUES (?, ?)";
const postGruposPermisosService: string = "INSERT INTO grupos_permisos (grupo_id, permiso_id, id_proyecto) VALUES (?, ?, ?)";
const postUsuariosGruposService: string = "INSERT INTO usuarios_grupos (usuario_id, grupo_id, id_proyecto) VALUES (?, ?, ?)";
const postUsuariosPermisosService: string = "INSERT INTO usuarios_permisos (usuario_id, permiso_id, id_proyecto) VALUES (?, ?, ?)";
const getUserWithPermissionsService: string = "SELECT u.id, u.nombre, u.apellido, u.foto, u.identificador, u.id_proyecto, g.id as grupo_id, g.nombre as grupo_nombre, p.id as permiso_id, p.nombre as permiso_nombre, p.descripcion as permiso_descripcion FROM usuarios u LEFT JOIN usuarios_grupos ug ON u.id = ug.usuario_id LEFT JOIN grupos g ON ug.grupo_id = g.id LEFT JOIN grupos_permisos gp ON g.id = gp.grupo_id LEFT JOIN permisos p ON gp.permiso_id = p.id LEFT JOIN usuarios_permisos up ON u.id = up.usuario_id WHERE u.id = ?";

export { getGruposService, getPermisosService, getGruposPermisosService, postGruposService, postGruposPermisosService, postUsuariosGruposService, postUsuariosPermisosService, getUserWithPermissionsService };
