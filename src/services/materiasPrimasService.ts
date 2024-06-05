const getMateriasPrimasService: string = "SELECT id, nombre, caducidad, stock_kgs, id_proyecto FROM materias_primas";
const getMateriasPrimasByNombreService: string = "SELECT id, nombre, caducidad, stock_kgs, id_proyecto FROM materias_primas WHERE nombre LIKE ?";
const getMateriasPrimasByProyectoService: string = "SELECT id, nombre, caducidad, stock_kgs, id_proyecto FROM materias_primas WHERE id_proyecto = ?";
const postMateriasPrimasService: string = "INSERT INTO materias_primas (nombre, caducidad, stock_kgs, id_proyecto) VALUES (?, ?, ?, ?)";
const putMateriasPrimasService: string = "UPDATE materias_primas SET nombre = ?, caducidad = ?, stock_kgs = ?, id_proyecto = ? WHERE id = ?";
const deleteMateriasPrimasService: string = "DELETE FROM materias_primas WHERE id = ?";

export { getMateriasPrimasService, getMateriasPrimasByNombreService, getMateriasPrimasByProyectoService, postMateriasPrimasService, putMateriasPrimasService, deleteMateriasPrimasService };
