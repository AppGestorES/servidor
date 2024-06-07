const getProductosFinalesService: string =
    "SELECT pf.id, pf.nombre, pf.formula_id, pf.caducidad, pf.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM productos_finales pf JOIN proyectos p ON pf.id_proyecto = p.id";

const getProductosFinalesByNombreService: string =
    "SELECT pf.id, pf.nombre, pf.formula_id, pf.caducidad, pf.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM productos_finales pf JOIN proyectos p ON pf.id_proyecto = p.id WHERE pf.nombre LIKE ?";

const getProductosFinalesByProyectoService: string =
    "SELECT pf.id, pf.nombre, pf.formula_id, pf.caducidad, pf.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM productos_finales pf JOIN proyectos p ON pf.id_proyecto = p.id WHERE pf.id_proyecto = ?";

const postProductosFinalesService: string =
    "INSERT INTO productos_finales (nombre, formula_id, caducidad, id_proyecto) VALUES (?, ?, ?, ?)";

const putProductosFinalesService: string =
    "UPDATE productos_finales SET nombre = ?, formula_id = ?, caducidad = ?, id_proyecto = ? WHERE id = ?";

const deleteProductosFinalesService: string =
    "DELETE FROM productos_finales WHERE id = ?";

export {
    getProductosFinalesService,
    getProductosFinalesByNombreService,
    getProductosFinalesByProyectoService,
    postProductosFinalesService,
    putProductosFinalesService,
    deleteProductosFinalesService,
};
