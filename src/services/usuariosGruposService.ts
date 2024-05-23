const getUsuariosGruposService: string = "SELECT usuario_id, grupo_id, id_proyecto FROM usuarios_grupos";
const getUsuariosGruposByUsuarioService: string = "SELECT usuario_id, grupo_id, id_proyecto FROM usuarios_grupos WHERE usuario_id = ?";
const getUsuariosGruposByGrupoService: string = "SELECT usuario_id, grupo_id, id_proyecto FROM usuarios_grupos WHERE grupo_id = ?";
const getUsuariosGruposByProyectoService: string = "SELECT usuario_id, grupo_id, id_proyecto FROM usuarios_grupos WHERE id_proyecto = ?";
const postUsuariosGruposService: string = "INSERT INTO usuarios_grupos (usuario_id, grupo_id, id_proyecto) VALUES (?, ?, ?)";
const deleteUsuariosGruposService: string = "DELETE FROM usuarios_grupos WHERE usuario_id = ? AND grupo_id = ?";

export { getUsuariosGruposService, getUsuariosGruposByUsuarioService, getUsuariosGruposByGrupoService, getUsuariosGruposByProyectoService, postUsuariosGruposService, deleteUsuariosGruposService };
