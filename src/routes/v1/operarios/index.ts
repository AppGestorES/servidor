import express from "express";

import { Operarios } from "@controllers/operarios/operarios";

const router = express.Router();

// rutas
router.get("/operarios", new Operarios().getOperarios);
router.get("/operarios/nombre/:nombre", new Operarios().getOperariosByNombre);
router.get("/operarios/proyecto/:id_proyecto", new Operarios().getOperariosByProyecto);
router.post("/operarios", new Operarios().postOperarios);
router.put("/operarios/:id", new Operarios().putOperarios);
router.delete("/operarios/:id", new Operarios().deleteOperarios);

export default router;
