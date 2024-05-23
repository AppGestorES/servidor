import express from "express";

import { Formatos } from "@controllers/formatos/formatos";

const router = express.Router();

// rutas
router.get("/formatos", new Formatos().getFormatos);
router.get("/formatos/nombre/:nombre", new Formatos().getFormatosByNombre);
router.get("/formatos/proyecto/:id_proyecto", new Formatos().getFormatosByProyecto);
router.post("/formatos", new Formatos().postFormatos);
router.put("/formatos/:id", new Formatos().putFormatos);
router.delete("/formatos/:id", new Formatos().deleteFormatos);

export default router;
