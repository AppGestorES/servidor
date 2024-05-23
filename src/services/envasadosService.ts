const getEnvasadosService: string = "SELECT id, nombre, id_proyecto FROM envasados";
const getEnvasadosByNombreService: string = "SELECT id, nombre, id_proyecto FROM envasados WHERE nombre LIKE ?";
const getEnvasadosByProyectoService: string = "SELECT id, nombre, id_proyecto FROM envasados WHERE id_proyecto = ?";
const postEnvasadosService: string = "INSERT INTO envasados (nombre, id_proyecto) VALUES (?, ?)";
const putEnvasadosService: string = "UPDATE envasados SET nombre = ?, id_proyecto = ? WHERE id = ?";
const deleteEnvasadosService: string = "DELETE FROM envasados WHERE id = ?";

export { getEnvasadosService, getEnvasadosByNombreService, getEnvasadosByProyectoService, postEnvasadosService, putEnvasadosService, deleteEnvasadosService };
