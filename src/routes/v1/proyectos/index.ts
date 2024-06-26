import express from "express";

import { Proyectos } from "@controllers/proyectos/proyectos";
import { checkPermission } from "@middlewares/roles";

const router = express.Router();

//rutas
router.get("/proyectos", checkPermission("ver_proyectos"), new Proyectos().getProyectos);
router.get("/proyectos/nombre/:nombre", new Proyectos().getProyectosByNombre);
router.get("/proyectos/nif/:nif", new Proyectos().getProyectosByNIF);
router.get("/proyectos/telefono/:telefono", new Proyectos().getProyectosByTelefono);
router.get("/proyectos/correo/:correo", new Proyectos().getProyectosByCorreoElectronico);
router.post("/proyectos", new Proyectos().postProyectos);
router.put("/proyectos/:id", new Proyectos().putProyectos);
router.delete("/proyectos/:id", new Proyectos().deleteProyectos);

export default router;
