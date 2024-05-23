const getDestinosService: string = "SELECT id, nombre, id_proyecto FROM destinos";
const getDestinosByIdService: string = "SELECT id, nombre, id_proyecto FROM destinos WHERE id = ?";
const getDestinosByNombreService: string = "SELECT id, nombre, id_proyecto FROM destinos WHERE nombre LIKE ?";
const getDestinosByIdProyectoService: string = "SELECT id, nombre, id_proyecto FROM destinos WHERE id_proyecto = ?";
const postDestinosService: string = "INSERT INTO destinos (nombre, id_proyecto) VALUES (?, ?)";
const putDestinosService: string = "UPDATE destinos SET nombre = ? WHERE id = ?";
const deleteDestinosService: string = "DELETE FROM destinos WHERE id = ?";

export { getDestinosService, getDestinosByIdService, getDestinosByNombreService, getDestinosByIdProyectoService, postDestinosService, putDestinosService, deleteDestinosService };