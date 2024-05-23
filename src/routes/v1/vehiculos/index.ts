import express from "express";

import { Vehiculos } from "@controllers/vehiculos/vehiculos";

const router = express.Router();

// rutas
router.get("/vehiculos", new Vehiculos().getVehiculos);
router.get("/vehiculos/matricula/:matricula", new Vehiculos().getVehiculosByMatricula);
router.get("/vehiculos/proyecto/:id_proyecto", new Vehiculos().getVehiculosByProyecto);
router.post("/vehiculos", new Vehiculos().postVehiculos);
router.put("/vehiculos/:id", new Vehiculos().putVehiculos);
router.delete("/vehiculos/:id", new Vehiculos().deleteVehiculos);

export default router;
