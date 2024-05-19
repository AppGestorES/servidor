import express from "express";

import { Sesiones } from "@controllers/sesiones/sesiones";

const router = express.Router();

//rutas
router.post("/iniciarsesion", new Sesiones().iniciarSesion);

export default router;
