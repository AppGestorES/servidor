const getIngredientesService: string = "SELECT formula_id, materia_prima_id, cantidad_kgs, id_proyecto FROM ingredientes";
const getIngredientesByFormulaService: string = "SELECT formula_id, materia_prima_id, cantidad_kgs, id_proyecto FROM ingredientes WHERE formula_id = ?";
const getIngredientesByMateriaPrimaService: string = "SELECT formula_id, materia_prima_id, cantidad_kgs, id_proyecto FROM ingredientes WHERE materia_prima_id = ?";
const getIngredientesByProyectoService: string = "SELECT formula_id, materia_prima_id, cantidad_kgs, id_proyecto FROM ingredientes WHERE id_proyecto = ?";
const postIngredientesService: string = "INSERT INTO ingredientes (formula_id, materia_prima_id, cantidad_kgs, id_proyecto) VALUES (?, ?, ?, ?)";
const deleteIngredientesService: string = "DELETE FROM ingredientes WHERE formula_id = ? AND materia_prima_id = ?";

export { getIngredientesService, getIngredientesByFormulaService, getIngredientesByMateriaPrimaService, getIngredientesByProyectoService, postIngredientesService, deleteIngredientesService };
