const getEnvasadosService: string =
    "SELECT e.id, e.nombre, e.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM envasados e JOIN proyectos p ON e.id_proyecto = p.id";

const getEnvasadosByNombreService: string =
    "SELECT e.id, e.nombre, e.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM envasados e JOIN proyectos p ON e.id_proyecto = p.id WHERE e.nombre LIKE ?";

const getEnvasadosByProyectoService: string =
    "SELECT e.id, e.nombre, e.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM envasados e JOIN proyectos p ON e.id_proyecto = p.id WHERE e.id_proyecto = ?";

const postEnvasadosService: string =
    "INSERT INTO envasados (nombre, id_proyecto) VALUES (?, ?)";

const putEnvasadosService: string =
    "UPDATE envasados SET nombre = ?, id_proyecto = ? WHERE id = ?";

const deleteEnvasadosService: string = "DELETE FROM envasados WHERE id = ?";

export {
    getEnvasadosService,
    getEnvasadosByNombreService,
    getEnvasadosByProyectoService,
    postEnvasadosService,
    putEnvasadosService,
    deleteEnvasadosService,
};
