import express from "express";

import NotFound404 from "@controllers/pages/notFound404";
import HealthCheck from "@controllers/pages/healthCheck";

const router = express.Router();

//rutas generales
router.get("/health", HealthCheck);

export default router;
