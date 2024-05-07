import express from "express";

import { MateriasPrimas } from "@controllers/materiasPrimas/getMateriasPrimas";

const router = express.Router();

//rutas
router.get("/materiasprimas", new MateriasPrimas().postMateriasPrimas);

export default router;
