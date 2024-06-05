const getOperariosService: string = "SELECT id, nombre, id_proyecto FROM operarios";
const getOperariosByNombreService: string = "SELECT id, nombre, id_proyecto FROM operarios WHERE nombre LIKE ?";
const getOperariosByProyectoService: string = "SELECT id, nombre, id_proyecto FROM operarios WHERE id_proyecto = ?";
const postOperariosService: string = "INSERT INTO operarios (nombre, id_proyecto) VALUES (?, ?)";
const putOperariosService: string = "UPDATE operarios SET nombre = ?, id_proyecto = ? WHERE id = ?";
const deleteOperariosService: string = "DELETE FROM operarios WHERE id = ?";

export { getOperariosService, getOperariosByNombreService, getOperariosByProyectoService, postOperariosService, putOperariosService, deleteOperariosService };
