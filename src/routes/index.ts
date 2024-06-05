import { Router } from "express";

import materiasPrimas from "@routes/v1/materiasPrimas";
import proyectos from "@routes/v1/proyectos";
import pages from "@routes/v1/pages";
import usuarios from "@routes/v1/usuarios";
import permisosRouter from "@routes/v1/permisos";
import salidaProductos from "@routes/v1/salidaProductos";
import sesiones from "@routes/v1/sesiones";
import productosFinales from "@routes/v1/productosFinales";
import operarios from "@routes/v1/operarios";
import ingredientes from "@routes/v1/ingredientes";
import envasados from "@routes/v1/envasados"
import entradaProductos from '@routes/v1/entradaProductos';
import logs from "@routes/v1/logs";
import destinos from "@routes/v1/destinos";
import formatos from "@routes/v1/formatos"
import proveedores from "@routes/v1/proveedores";
import formulas from "@routes/v1/formulas"
import vehiculos from "@routes/v1/vehiculos"

import { authMiddleware } from "@middlewares/auth";

const router = Router();

router.use(authMiddleware, materiasPrimas);
router.use(authMiddleware, proyectos);
router.use(authMiddleware, usuarios);
router.use(authMiddleware, permisosRouter);
router.use(authMiddleware, salidaProductos);
router.use(sesiones);
router.use(authMiddleware, productosFinales);
router.use(authMiddleware, operarios);
router.use(authMiddleware, ingredientes);
router.use(authMiddleware, envasados);
router.use(authMiddleware, entradaProductos)
router.use(authMiddleware, logs);
router.use(authMiddleware, destinos);
router.use(authMiddleware, formatos);
router.use(authMiddleware, proveedores);
router.use(authMiddleware, formulas);
router.use(authMiddleware, vehiculos);
router.use(authMiddleware, pages);

export default router;
