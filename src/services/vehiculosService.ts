const getVehiculosService: string =
    "SELECT v.id, v.matricula, v.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM vehiculos v JOIN proyectos p ON v.id_proyecto = p.id";

const getVehiculosByMatriculaService: string =
    "SELECT v.id, v.matricula, v.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM vehiculos v JOIN proyectos p ON v.id_proyecto = p.id WHERE v.matricula LIKE ?";

const getVehiculosByProyectoService: string =
    "SELECT v.id, v.matricula, v.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM vehiculos v JOIN proyectos p ON v.id_proyecto = p.id WHERE v.id_proyecto = ?";

const postVehiculosService: string =
    "INSERT INTO vehiculos (matricula, id_proyecto) VALUES (?, ?)";

const putVehiculosService: string =
    "UPDATE vehiculos SET matricula = ?, id_proyecto = ? WHERE id = ?";

const deleteVehiculosService: string = "DELETE FROM vehiculos WHERE id = ?";

export {
    getVehiculosService,
    getVehiculosByMatriculaService,
    getVehiculosByProyectoService,
    postVehiculosService,
    putVehiculosService,
    deleteVehiculosService,
};
