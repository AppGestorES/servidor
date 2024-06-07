import express from "express";

import { Proveedores } from "@controllers/proveedores/proveedores";

const router = express.Router();

// rutas
router.get("/proveedores", new Proveedores().getProveedores);
router.get(
    "/proveedores/nombre/:nombre",
    new Proveedores().getProveedoresByNombre
);
router.get(
    "/proveedores/proyecto/:id_proyecto",
    new Proveedores().getProveedoresByProyecto
);
router.post("/proveedores", new Proveedores().postProveedores);
router.put("/proveedores/:id", new Proveedores().putProveedores);
router.delete("/proveedores/:id", new Proveedores().deleteProveedores);

export default router;
