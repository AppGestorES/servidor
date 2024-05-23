const getProductosFinalesService: string = "SELECT id, nombre, formula_id, caducidad, id_proyecto FROM productos_finales";
const getProductosFinalesByNombreService: string = "SELECT id, nombre, formula_id, caducidad, id_proyecto FROM productos_finales WHERE nombre LIKE ?";
const getProductosFinalesByFormulaService: string = "SELECT id, nombre, formula_id, caducidad, id_proyecto FROM productos_finales WHERE formula_id = ?";
const getProductosFinalesByProyectoService: string = "SELECT id, nombre, formula_id, caducidad, id_proyecto FROM productos_finales WHERE id_proyecto = ?";
const postProductosFinalesService: string = "INSERT INTO productos_finales (nombre, formula_id, caducidad, id_proyecto) VALUES (?, ?, ?, ?)";
const putProductosFinalesService: string = "UPDATE productos_finales SET nombre = ?, formula_id = ?, caducidad = ?, id_proyecto = ? WHERE id = ?";
const deleteProductosFinalesService: string = "DELETE FROM productos_finales WHERE id = ?";

export { getProductosFinalesService, getProductosFinalesByNombreService, getProductosFinalesByFormulaService, getProductosFinalesByProyectoService, postProductosFinalesService, putProductosFinalesService, deleteProductosFinalesService };
