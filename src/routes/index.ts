import { Router } from "express";

import materiasPrimas from "@routes/v1/materiasPrimas";
import proyectos from "@routes/v1/proyectos";
import pages from "@routes/v1/pages";
import usuarios from "@routes/v1/usuarios";
import sesiones from "@routes/v1/sesiones";
import formatos from "@routes/v1/formatos"
import proveedores from "@routes/v1/proveedores";
import formulas from "@routes/v1/formulas"
import vehiculos from "@routes/v1/vehiculos"

const router = Router();

router.use(materiasPrimas);
router.use(proyectos);
router.use(usuarios);
router.use(sesiones);
router.use(formatos);
router.use(proveedores);
router.use(formulas);
router.use(vehiculos);
router.use(pages);

export default router;
