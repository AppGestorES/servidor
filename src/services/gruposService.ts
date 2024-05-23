const getGruposService: string = "SELECT id, nombre, id_proyecto FROM grupos";
const getGruposByNombreService: string = "SELECT id, nombre, id_proyecto FROM grupos WHERE nombre LIKE ?";
const getGruposByProyectoService: string = "SELECT id, nombre, id_proyecto FROM grupos WHERE id_proyecto = ?";
const postGruposService: string = "INSERT INTO grupos (nombre, id_proyecto) VALUES (?, ?)";
const putGruposService: string = "UPDATE grupos SET nombre = ?, id_proyecto = ? WHERE id = ?";
const deleteGruposService: string = "DELETE FROM grupos WHERE id = ?";

export { getGruposService, getGruposByNombreService, getGruposByProyectoService, postGruposService, putGruposService, deleteGruposService };
