import express from "express";

import { Logs } from "@controllers/logs/logs";

const router = express.Router();

// rutas
router.get("/logs", new Logs().getLogs);
router.get("/logs/tipo/:tipo", new Logs().getLogsByTipo);
router.get("/logs/usuario/:usuario", new Logs().getLogsByUsuario);
router.post("/logs", new Logs().postLogs);
router.put("/logs/:id", new Logs().putLogs);
router.delete("/logs/:id", new Logs().deleteLogs);

export default router;
