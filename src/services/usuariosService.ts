const getUsuariosService: string =
    "SELECT u.id, u.nombre, u.apellido, u.foto, u.identificador, u.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM usuarios u JOIN proyectos p ON u.id_proyecto = p.id";

const getUsuarioByIdService: string =
    "SELECT u.id, u.nombre, u.apellido, u.foto, u.identificador, u.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM usuarios u JOIN proyectos p ON u.id_proyecto = p.id WHERE u.id = ?";

const getUsuariosByNombreService: string =
    "SELECT u.id, u.nombre, u.apellido, u.foto, u.identificador, u.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM usuarios u JOIN proyectos p ON u.id_proyecto = p.id WHERE u.nombre LIKE ?";

const getUsuariosByApellidoService: string =
    "SELECT u.id, u.nombre, u.apellido, u.foto, u.identificador, u.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM usuarios u JOIN proyectos p ON u.id_proyecto = p.id WHERE u.apellido LIKE ?";

const getUsuariosByIdentificadorService: string =
    "SELECT u.id, u.nombre, u.apellido, u.foto, u.identificador, u.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM usuarios u JOIN proyectos p ON u.id_proyecto = p.id WHERE u.identificador LIKE ?";

const getUsuariosByProyectoService: string =
    "SELECT u.id, u.nombre, u.apellido, u.foto, u.identificador, u.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM usuarios u JOIN proyectos p ON u.id_proyecto = p.id WHERE u.id_proyecto = ?";

const postUsuariosService: string =
    "INSERT INTO usuarios (nombre, apellido, contrasena, identificador) VALUES (?, ?, ?, ?)";

const putUsuariosService: string =
    "UPDATE usuarios SET nombre = ?, apellido = ?, foto = ?, contrasena = ?, identificador = ?, id_proyecto = ?, es_admin = ?, proyecto_admin = ? WHERE id = ?";

const deleteUsuariosService: string = "DELETE FROM usuarios WHERE id = ?";

export {
    getUsuariosService,
    getUsuarioByIdService,
    getUsuariosByNombreService,
    getUsuariosByApellidoService,
    getUsuariosByIdentificadorService,
    getUsuariosByProyectoService,
    postUsuariosService,
    putUsuariosService,
    deleteUsuariosService,
};
