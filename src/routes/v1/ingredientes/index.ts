import express from "express";

import { Ingredientes } from "@controllers/ingredientes/ingredientes";

const router = express.Router();

// rutas
router.get("/ingredientes", new Ingredientes().getIngredientes);
router.get("/ingredientes/formula/:formula_id", new Ingredientes().getIngredientesByFormula);
router.get("/ingredientes/materia_prima/:materia_prima_id", new Ingredientes().getIngredientesByMateriaPrima);
router.get("/ingredientes/proyecto/:id_proyecto", new Ingredientes().getIngredientesByProyecto);
router.post("/ingredientes", new Ingredientes().postIngredientes);
router.delete("/ingredientes/:formula_id/:materia_prima_id", new Ingredientes().deleteIngredientes);

export default router;
