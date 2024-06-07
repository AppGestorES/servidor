import express from "express";

import { ProductosFinales } from "@controllers/productosFinales/productosFinales";

const router = express.Router();

// rutas
router.get("/productos_finales", new ProductosFinales().getProductosFinales);
router.get(
    "/productos_finales/nombre/:nombre",
    new ProductosFinales().getProductosFinalesByNombre
);
router.get(
    "/productos_finales/proyecto/:id_proyecto",
    new ProductosFinales().getProductosFinalesByProyecto
);
router.post("/productos_finales", new ProductosFinales().postProductosFinales);
router.put(
    "/productos_finales/:id",
    new ProductosFinales().putProductosFinales
);
router.delete(
    "/productos_finales/:id",
    new ProductosFinales().deleteProductosFinales
);

export default router;
