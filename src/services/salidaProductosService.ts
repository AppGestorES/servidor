const getSalidasService: string = "SELECT id, producto_final_id, formula_id, numero_lote, fecha_salida, cantidad, fecha_caducidad, envasado_id, formato_id, destino_id, vehiculo_id, id_proyecto FROM salida_de_productos";
const getSalidasByProductoFinalService: string = "SELECT id, producto_final_id, formula_id, numero_lote, fecha_salida, cantidad, fecha_caducidad, envasado_id, formato_id, destino_id, vehiculo_id, id_proyecto FROM salida_de_productos WHERE producto_final_id = ?";
const getSalidasByFechaSalidaService: string = "SELECT id, producto_final_id, formula_id, numero_lote, fecha_salida, cantidad, fecha_caducidad, envasado_id, formato_id, destino_id, vehiculo_id, id_proyecto FROM salida_de_productos WHERE fecha_salida = ?";
const getSalidasByProyectoService: string = "SELECT id, producto_final_id, formula_id, numero_lote, fecha_salida, cantidad, fecha_caducidad, envasado_id, formato_id, destino_id, vehiculo_id, id_proyecto FROM salida_de_productos WHERE id_proyecto = ?";
const postSalidasService: string = "INSERT INTO salida_de_productos (producto_final_id, formula_id, numero_lote, fecha_salida, cantidad, fecha_caducidad, envasado_id, formato_id, destino_id, vehiculo_id, id_proyecto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
const putSalidasService: string = "UPDATE salida_de_productos SET producto_final_id = ?, formula_id = ?, numero_lote = ?, fecha_salida = ?, cantidad = ?, fecha_caducidad = ?, envasado_id = ?, formato_id = ?, destino_id = ?, vehiculo_id = ?, id_proyecto = ? WHERE id = ?";
const deleteSalidasService: string = "DELETE FROM salida_de_productos WHERE id = ?";

export { getSalidasService, getSalidasByProductoFinalService, getSalidasByFechaSalidaService, getSalidasByProyectoService, postSalidasService, putSalidasService, deleteSalidasService };
