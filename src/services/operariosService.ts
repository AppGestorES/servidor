const getOperariosService: string =
    "SELECT o.id, o.nombre, o.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM operarios o JOIN proyectos p ON o.id_proyecto = p.id";

const getOperariosByNombreService: string =
    "SELECT o.id, o.nombre, o.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM operarios o JOIN proyectos p ON o.id_proyecto = p.id WHERE o.nombre LIKE ?";

const getOperariosByProyectoService: string =
    "SELECT o.id, o.nombre, o.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM operarios o JOIN proyectos p ON o.id_proyecto = p.id WHERE o.id_proyecto = ?";

const postOperariosService: string =
    "INSERT INTO operarios (nombre, id_proyecto) VALUES (?, ?)";

const putOperariosService: string =
    "UPDATE operarios SET nombre = ?, id_proyecto = ? WHERE id = ?";

const deleteOperariosService: string = "DELETE FROM operarios WHERE id = ?";

export {
    getOperariosService,
    getOperariosByNombreService,
    getOperariosByProyectoService,
    postOperariosService,
    putOperariosService,
    deleteOperariosService,
};
