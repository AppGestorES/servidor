import express from "express";

import { Destinos } from "@controllers/destinos/destinos";

const router = express.Router();

//rutas
router.get("/destinos", new Destinos().getDestinos);
router.get("/destinos/id/:id", new Destinos().getDestinosById);
router.get("/destinos/nombre/:nombre", new Destinos().getDestinosByNombre);
router.get("/destinos/idproyecto/:id", new Destinos().getDestinosByIdProyecto);
router.post("/destinos", new Destinos().postDestinos);
router.put("/destinos/:id", new Destinos().putDestinos);
router.delete("/destinos/:id", new Destinos().deleteDestinos);

export default router;
