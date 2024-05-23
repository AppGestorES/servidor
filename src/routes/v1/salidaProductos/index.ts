import express from "express";

import { Salidas } from "@controllers/salidaProductos/salidaProductos";

const router = express.Router();

// rutas
router.get("/salidas", new Salidas().getSalidas);
router.get("/salidas/producto_final/:producto_final_id", new Salidas().getSalidasByProductoFinal);
router.get("/salidas/fecha_salida/:fecha_salida", new Salidas().getSalidasByFechaSalida);
router.get("/salidas/proyecto/:id_proyecto", new Salidas().getSalidasByProyecto);
router.post("/salidas", new Salidas().postSalidas);
router.put("/salidas/:id", new Salidas().putSalidas);
router.delete("/salidas/:id", new Salidas().deleteSalidas);

export default router;
