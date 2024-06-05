import express from "express";
import { PermissionsController } from "@controllers/permisos/permisos";

const router = express.Router();

router.get("/grupos", new PermissionsController().getGrupos);
router.get("/permisos", new PermissionsController().getPermisos);
router.get("/grupos/permisos", new PermissionsController().getGruposConPermisos);
router.post("/grupos", new PermissionsController().createGrupo);
router.post("/grupos/permiso", new PermissionsController().assignPermisoToGrupo);
router.post("/usuarios/grupo", new PermissionsController().assignGrupoToUsuario);
router.post("/usuarios/permiso", new PermissionsController().assignPermisoToUsuario);

export default router;
