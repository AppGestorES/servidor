import express from "express";

import { MateriasPrimas } from "@controllers/materiasPrimas/materiasPrimas";

//import { checkPermission } from "@middlewares/checkPermission";

const router = express.Router();

// rutas
router.get("/materias_primas", new MateriasPrimas().getMateriasPrimas);
router.get("/materias_primas/nombre/:nombre", new MateriasPrimas().getMateriasPrimasByNombre);
router.get("/materias_primas/proyecto/:id_proyecto", new MateriasPrimas().getMateriasPrimasByProyecto);
router.post("/materias_primas", new MateriasPrimas().postMateriasPrimas);
router.put("/materias_primas/:id", new MateriasPrimas().putMateriasPrimas);
router.delete("/materias_primas/:id", new MateriasPrimas().deleteMateriasPrimas);
// router.delete("/materias_primas/:id", checkPermission("assign_permiso_to_usuario"), new MateriasPrimas().deleteMateriasPrimas);

export default router;
