import express from "express";

import { Envasados } from "@controllers/envasados/envasados";

const router = express.Router();

// rutas
router.get("/envasados", new Envasados().getEnvasados);
router.get("/envasados/nombre/:nombre", new Envasados().getEnvasadosByNombre);
router.get("/envasados/proyecto/:id_proyecto", new Envasados().getEnvasadosByProyecto);
router.post("/envasados", new Envasados().postEnvasados);
router.put("/envasados/:id", new Envasados().putEnvasados);
router.delete("/envasados/:id", new Envasados().deleteEnvasados);

export default router;