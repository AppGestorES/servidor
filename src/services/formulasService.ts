const getFormulasService: string = "SELECT id, nombre, caducidad, id_proyecto FROM formulas";
const getFormulasByNombreService: string = "SELECT id, nombre, caducidad, id_proyecto FROM formulas WHERE nombre LIKE ?";
const getFormulasByProyectoService: string = "SELECT id, nombre, caducidad, id_proyecto FROM formulas WHERE id_proyecto = ?";
const postFormulasService: string = "INSERT INTO formulas (nombre, caducidad, id_proyecto) VALUES (?, ?, ?)";
const putFormulasService: string = "UPDATE formulas SET nombre = ?, caducidad = ?, id_proyecto = ? WHERE id = ?";
const deleteFormulasService: string = "DELETE FROM formulas WHERE id = ?";

export { getFormulasService, getFormulasByNombreService, getFormulasByProyectoService, postFormulasService, putFormulasService, deleteFormulasService };
