const getDestinosService: string =
    "SELECT d.id, d.nombre, d.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM destinos d JOIN proyectos p ON d.id_proyecto = p.id";
const getDestinosByIdService: string =
    "SELECT d.id, d.nombre, d.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM destinos d JOIN proyectos p ON d.id_proyecto = p.id WHERE d.id = ?";
const getDestinosByNombreService: string =
    "SELECT d.id, d.nombre, d.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM destinos d JOIN proyectos p ON d.id_proyecto = p.id WHERE d.nombre LIKE ?";
const getDestinosByIdProyectoService: string =
    "SELECT d.id, d.nombre, d.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM destinos d JOIN proyectos p ON d.id_proyecto = p.id WHERE d.id_proyecto = ?";
const postDestinosService: string =
    "INSERT INTO destinos (nombre, id_proyecto) VALUES (?, ?)";
const putDestinosService: string =
    "UPDATE destinos SET nombre = ? WHERE id = ?";
const deleteDestinosService: string = "DELETE FROM destinos WHERE id = ?";

export {
    getDestinosService,
    getDestinosByIdService,
    getDestinosByNombreService,
    getDestinosByIdProyectoService,
    postDestinosService,
    putDestinosService,
    deleteDestinosService,
};
