const getEntradasService: string = "SELECT e.id, e.producto_final_id, e.fecha_entrada, e.proveedor, e.numero_albaran, e.numero_lote, e.cantidad_kg, e.fecha_caducidad, e.envasado_id, e.operario_id, e.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo, o.id AS operario_real_id, o.nombre AS operario_nombre, en.id AS envasado_real_id, en.nombre AS envasado_nombre FROM entrada_de_productos e JOIN proyectos p ON e.id_proyecto = p.id JOIN operarios o ON e.operario_id = o.id JOIN envasados en ON e.envasado_id = en.id";

const getEntradasByProductoFinalService: string = "SELECT e.id, e.producto_final_id, e.fecha_entrada, e.proveedor, e.numero_albaran, e.numero_lote, e.cantidad_kg, e.fecha_caducidad, e.envasado_id, e.operario_id, e.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo, o.id AS operario_real_id, o.nombre AS operario_nombre, en.id AS envasado_real_id, en.nombre AS envasado_nombre FROM entrada_de_productos e JOIN proyectos p ON e.id_proyecto = p.id JOIN operarios o ON e.operario_id = o.id JOIN envasados en ON e.envasado_id = en.id WHERE e.producto_final_id = ?";

const getEntradasByFechaEntradaService: string = "SELECT e.id, e.producto_final_id, e.fecha_entrada, e.proveedor, e.numero_albaran, e.numero_lote, e.cantidad_kg, e.fecha_caducidad, e.envasado_id, e.operario_id, e.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo, o.id AS operario_real_id, o.nombre AS operario_nombre, en.id AS envasado_real_id, en.nombre AS envasado_nombre FROM entrada_de_productos e JOIN proyectos p ON e.id_proyecto = p.id JOIN operarios o ON e.operario_id = o.id JOIN envasados en ON e.envasado_id = en.id WHERE e.fecha_entrada = ?";

const getEntradasByProveedorService: string = "SELECT e.id, e.producto_final_id, e.fecha_entrada, e.proveedor, e.numero_albaran, e.numero_lote, e.cantidad_kg, e.fecha_caducidad, e.envasado_id, e.operario_id, e.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo, o.id AS operario_real_id, o.nombre AS operario_nombre, en.id AS envasado_real_id, en.nombre AS envasado_nombre FROM entrada_de_productos e JOIN proyectos p ON e.id_proyecto = p.id JOIN operarios o ON e.operario_id = o.id JOIN envasados en ON e.envasado_id = en.id WHERE e.proveedor LIKE ?";

const getEntradasByNumeroAlbaranService: string = "SELECT e.id, e.producto_final_id, e.fecha_entrada, e.proveedor, e.numero_albaran, e.numero_lote, e.cantidad_kg, e.fecha_caducidad, e.envasado_id, e.operario_id, e.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo, o.id AS operario_real_id, o.nombre AS operario_nombre, en.id AS envasado_real_id, en.nombre AS envasado_nombre FROM entrada_de_productos e JOIN proyectos p ON e.id_proyecto = p.id JOIN operarios o ON e.operario_id = o.id JOIN envasados en ON e.envasado_id = en.id WHERE e.numero_albaran LIKE ?";

const postEntradasService: string = "INSERT INTO entrada_de_productos (producto_final_id, fecha_entrada, proveedor, numero_albaran, numero_lote, cantidad_kg, fecha_caducidad, envasado_id, operario_id, id_proyecto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

const putEntradasService: string = "UPDATE entrada_de_productos SET producto_final_id = ?, fecha_entrada = ?, proveedor = ?, numero_albaran = ?, numero_lote = ?, cantidad_kg = ?, fecha_caducidad = ?, envasado_id = ?, operario_id = ?, id_proyecto = ? WHERE id = ?";

const deleteEntradasService: string = "DELETE FROM entrada_de_productos WHERE id = ?";

export { 
    getEntradasService, 
    getEntradasByProductoFinalService, 
    getEntradasByFechaEntradaService, 
    getEntradasByProveedorService, 
    getEntradasByNumeroAlbaranService, 
    postEntradasService, 
    putEntradasService, 
    deleteEntradasService 
};
