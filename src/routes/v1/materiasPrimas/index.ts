import express from "express";

import { MateriasPrimas } from "@controllers/materiasPrimas/materiasPrimas";

const router = express.Router();

//rutas
router.get("/materiasprimas", new MateriasPrimas().postMateriasPrimas);

export default router;
