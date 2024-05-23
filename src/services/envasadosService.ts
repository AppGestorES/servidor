const getEnvasadoService: string = "SELECT id, nombre, id_proyecto FROM envasado";
const getEnvasadoByNombreService: string = "SELECT id, nombre, id_proyecto FROM envasado WHERE nombre LIKE ?";
const getEnvasadoByProyectoService: string = "SELECT id, nombre, id_proyecto FROM envasado WHERE id_proyecto = ?";
const postEnvasadoService: string = "INSERT INTO envasado (nombre, id_proyecto) VALUES (?, ?)";
const putEnvasadoService: string = "UPDATE envasado SET nombre = ?, id_proyecto = ? WHERE id = ?";
const deleteEnvasadoService: string = "DELETE FROM envasado WHERE id = ?";

export { getEnvasadoService, getEnvasadoByNombreService, getEnvasadoByProyectoService, postEnvasadoService, putEnvasadoService, deleteEnvasadoService };
