const getFormatosService: string = "SELECT id, nombre, id_proyecto FROM formatos";
const getFormatosByNombreService: string = "SELECT id, nombre, id_proyecto FROM formatos WHERE nombre LIKE ?";
const getFormatosByProyectoService: string = "SELECT id, nombre, id_proyecto FROM formatos WHERE id_proyecto = ?";
const postFormatosService: string = "INSERT INTO formatos (nombre, id_proyecto) VALUES (?, ?)";
const putFormatosService: string = "UPDATE formatos SET nombre = ?, id_proyecto = ? WHERE id = ?";
const deleteFormatosService: string = "DELETE FROM formatos WHERE id = ?";

export { getFormatosService, getFormatosByNombreService, getFormatosByProyectoService, postFormatosService, putFormatosService, deleteFormatosService };
