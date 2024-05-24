import express from "express";

import { SalidaProductos } from "@controllers/salidaProductos/salidaProductos";

const router = express.Router();

// rutas
router.get("/salidas", new SalidaProductos().getSalidas);
router.get("/salidas/producto_final/:producto_final_id", new SalidaProductos().getSalidasByProductoFinal);
router.get("/salidas/fecha_salida/:fecha_salida", new SalidaProductos().getSalidasByFechaSalida);
router.get("/salidas/proyecto/:id_proyecto", new SalidaProductos().getSalidasByProyecto);
router.post("/salidas", new SalidaProductos().postSalidas);
router.put("/salidas/:id", new SalidaProductos().putSalidas);
router.delete("/salidas/:id", new SalidaProductos().deleteSalidas);

export default router;
