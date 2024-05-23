import { Router } from "express";

import materiasPrimas from "@routes/v1/materiasPrimas";
import proyectos from "@routes/v1/proyectos";
import pages from "@routes/v1/pages";
import usuarios from "@routes/v1/usuarios";
import sesiones from "@routes/v1/sesiones";
import ingredientes from "@routes/v1/ingredientes";

const router = Router();

router.use(materiasPrimas);
router.use(proyectos);
router.use(usuarios);
router.use(sesiones);
router.use(ingredientes);
router.use(pages);

export default router;
