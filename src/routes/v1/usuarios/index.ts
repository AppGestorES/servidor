import express from "express";

import { Usuarios } from "@controllers/usuarios/usuarios";

const router = express.Router();

// rutas
router.get("/usuarios", new Usuarios().getUsuarios);
router.get("/usuarios/:id", new Usuarios().getUsuarioById);
router.get("/usuarios/nombre/:nombre", new Usuarios().getUsuariosByNombre);
router.get(
    "/usuarios/apellido/:apellido",
    new Usuarios().getUsuariosByApellido
);
router.get(
    "/usuarios/identificador/:identificador",
    new Usuarios().getUsuariosByIdentificador
);
router.get(
    "/usuarios/proyecto/:proyecto",
    new Usuarios().getUsuariosByProyecto
);
router.post("/usuarios", new Usuarios().postUsuarios);
router.put("/usuarios/:id", new Usuarios().putUsuarios);
router.delete("/usuarios/:id", new Usuarios().deleteUsuarios);
router.get("/usuarios/:id/permisos", new Usuarios().getUserWithPermissions);

export default router;
