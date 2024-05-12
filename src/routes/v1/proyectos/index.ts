import express from "express";

import { Proyectos } from "@controllers/proyectos/proyectos";

const router = express.Router();

//rutas
router.get("/proyectos", new Proyectos().getProyectos);
router.get("/proyectos/nombre/:nombre", new Proyectos().getProyectosByNombre);
router.post("/proyectos", new Proyectos().postProyectos);
router.put("/proyectos/:id", new Proyectos().putProyectos);
router.delete("/proyectos/:id", new Proyectos().deleteProyectos);

export default router;
