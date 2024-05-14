const getUsuariosService: string = "SELECT id, nombre, apellido, foto, identificador, id_proyecto FROM usuarios";
const getUsuarioByIdService: string = "SELECT id, nombre, apellido, foto, identificador, id_proyecto FROM usuarios WHERE id = ?";
const getUsuariosByNombreService: string = "SELECT id, nombre, apellido, foto, identificador, id_proyecto FROM usuarios WHERE nombre LIKE ?";
const getUsuariosByApellidoService: string = "SELECT id, nombre, apellido, foto, identificador, id_proyecto FROM usuarios WHERE appellido LIKE ?";
const getUsuariosByIdentificadorService: string = "SELECT id, nombre, apellido, foto, identificador, id_proyecto FROM usuarios WHERE identificador LIKE ?";
const getUsuariosByProyectoService: string = "SELECT id, nombre, apellido, foto, identificador, id_proyecto FROM usuarios WHERE id_proyecto = ?";
const postUsuariosService: string = "INSERT INTO usuarios (nombre, apellido, contrasena, identificador, id_proyecto) VALUES (?, ?, ?, ?, ?)";
const putUsuariosService: string = "UPDATE usuarios SET nombre = ?, apellido = ?, foto = ?, contrasena = ?, identificador = ?, id_proyecto = ? WHERE id = ?";
const deleteUsuariosService: string = "DELETE FROM usuarios WHERE id = ?";

export { getUsuariosService, getUsuarioByIdService, getUsuariosByNombreService, getUsuariosByApellidoService, getUsuariosByIdentificadorService, getUsuariosByProyectoService, postUsuariosService, putUsuariosService, deleteUsuariosService };
