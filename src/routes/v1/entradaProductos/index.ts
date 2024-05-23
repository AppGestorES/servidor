import express from "express";

import { Entradas } from "@controllers/entradaProductos/entradaProductos";

const router = express.Router();

// rutas
router.get("/entradas", new Entradas().getEntradas);
router.get("/entradas/producto_final/:producto_final_id", new Entradas().getEntradasByProductoFinal);
router.get("/entradas/fecha_entrada/:fecha_entrada", new Entradas().getEntradasByFechaEntrada);
router.get("/entradas/proveedor/:proveedor", new Entradas().getEntradasByProveedor);
router.get("/entradas/numero_albaran/:numero_albaran", new Entradas().getEntradasByNumeroAlbaran);
router.post("/entradas", new Entradas().postEntradas);
router.put("/entradas/:id", new Entradas().putEntradas);
router.delete("/entradas/:id", new Entradas().deleteEntradas);

export default router;
