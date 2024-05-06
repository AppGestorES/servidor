import express from "express";

import { MateriasPrimas } from "@controllers/materiasPrimas/GET/getMateriasPrimas";

const router = express.Router();

//rutas
router.get("/materiasprimas", new MateriasPrimas().getMateriasPrimas);

export default router;
