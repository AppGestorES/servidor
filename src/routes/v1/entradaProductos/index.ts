import express from "express";

import { EntradaProductos } from "@controllers/entradaProductos/entradaProductos";

const router = express.Router();

// rutas
router.get("/entradas", new EntradaProductos().getEntradas);
router.get("/entradas/producto_final/:producto_final_id", new EntradaProductos().getEntradasByProductoFinal);
router.get("/entradas/fecha_entrada/:fecha_entrada", new EntradaProductos().getEntradasByFechaEntrada);
router.get("/entradas/proveedor/:proveedor", new EntradaProductos().getEntradasByProveedor);
router.get("/entradas/numero_albaran/:numero_albaran", new EntradaProductos().getEntradasByNumeroAlbaran);
router.post("/entradas", new EntradaProductos().postEntradas);
router.put("/entradas/:id", new EntradaProductos().putEntradas);
router.delete("/entradas/:id", new EntradaProductos().deleteEntradas);

export default router;
