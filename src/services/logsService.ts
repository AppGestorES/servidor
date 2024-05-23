const getLogsService: string = "SELECT id, fecha, tipo, mensaje, version, usuario FROM logs";
const getLogsByTipoService: string = "SELECT id, fecha, tipo, mensaje, version, usuario FROM logs WHERE tipo LIKE ?";
const getLogsByUsuarioService: string = "SELECT id, fecha, tipo, mensaje, version, usuario FROM logs WHERE usuario = ?";
const postLogsService: string = "INSERT INTO logs (fecha, tipo, mensaje, version, usuario) VALUES (?, ?, ?, ?, ?)";
const putLogsService: string = "UPDATE logs SET fecha = ?, tipo = ?, mensaje = ?, version = ?, usuario = ? WHERE id = ?";
const deleteLogsService: string = "DELETE FROM logs WHERE id = ?";

export { getLogsService, getLogsByTipoService, getLogsByUsuarioService, postLogsService, putLogsService, deleteLogsService };
