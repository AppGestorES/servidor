import { Router } from "express";

import materiasPrimas from "@routes/v1/materiasPrimas";
import pages from "@routes/v1/pages";

const router = Router();

router.use(materiasPrimas);
router.use(pages);

export default router;
