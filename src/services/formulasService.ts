const getFormulasService: string =
    "SELECT f.id, f.nombre, f.caducidad, f.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM formulas f JOIN proyectos p ON f.id_proyecto = p.id";

const getFormulasByNombreService: string =
    "SELECT f.id, f.nombre, f.caducidad, f.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM formulas f JOIN proyectos p ON f.id_proyecto = p.id WHERE f.nombre LIKE ?";

const getFormulasByProyectoService: string =
    "SELECT f.id, f.nombre, f.caducidad, f.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM formulas f JOIN proyectos p ON f.id_proyecto = p.id WHERE f.id_proyecto = ?";

const postFormulasService: string =
    "INSERT INTO formulas (nombre, caducidad, id_proyecto) VALUES (?, ?, ?)";

const putFormulasService: string =
    "UPDATE formulas SET nombre = ?, caducidad = ?, id_proyecto = ? WHERE id = ?";

const deleteFormulasService: string = "DELETE FROM formulas WHERE id = ?";

export {
    getFormulasService,
    getFormulasByNombreService,
    getFormulasByProyectoService,
    postFormulasService,
    putFormulasService,
    deleteFormulasService,
};
