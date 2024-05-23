const getVehiculosService: string = "SELECT id, matricula, id_proyecto FROM vehiculos";
const getVehiculosByMatriculaService: string = "SELECT id, matricula, id_proyecto FROM vehiculos WHERE matricula LIKE ?";
const getVehiculosByProyectoService: string = "SELECT id, matricula, id_proyecto FROM vehiculos WHERE id_proyecto = ?";
const postVehiculosService: string = "INSERT INTO vehiculos (matricula, id_proyecto) VALUES (?, ?)";
const putVehiculosService: string = "UPDATE vehiculos SET matricula = ?, id_proyecto = ? WHERE id = ?";
const deleteVehiculosService: string = "DELETE FROM vehiculos WHERE id = ?";

export { getVehiculosService, getVehiculosByMatriculaService, getVehiculosByProyectoService, postVehiculosService, putVehiculosService, deleteVehiculosService };
