import express from "express";

import { Formulas } from "@controllers/formulas/formulas";

const router = express.Router();

// rutas
router.get("/formulas", new Formulas().getFormulas);
router.get("/formulas/nombre/:nombre", new Formulas().getFormulasByNombre);
router.get("/formulas/proyecto/:id_proyecto", new Formulas().getFormulasByProyecto);
router.post("/formulas", new Formulas().postFormulas);
router.put("/formulas/:id", new Formulas().putFormulas);
router.delete("/formulas/:id", new Formulas().deleteFormulas);

export default router;
