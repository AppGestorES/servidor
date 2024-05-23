const getProyectosService: string = "SELECT id, nombre, nif, direccion, codigo_postal, poblacion, telefono, correo_electronico, logo FROM proyectos";
const getProyectosByNombreService: string = "SELECT id, nombre, nif, direccion, codigo_postal, poblacion, telefono, correo_electronico, logo FROM proyectos WHERE nombre LIKE ?";
const getProyectosByNIFService: string = "SELECT id, nombre, nif, direccion, codigo_postal, poblacion, telefono, correo_electronico, logo FROM proyectos WHERE nif LIKE ?";
const getProyectosByTelefonoService: string = "SELECT id, nombre, nif, direccion, codigo_postal, poblacion, telefono, correo_electronico, logo FROM proyectos WHERE telefono LIKE ?";
const getProyectosByCorreoElectronicoService: string = "SELECT id, nombre, nif, direccion, codigo_postal, poblacion, telefono, correo_electronico, logo FROM proyectos WHERE correo_electronico LIKE ?";
const postProyectosService: string = "INSERT INTO proyectos (nombre, nif, direccion, codigo_postal, poblacion, telefono, correo_electronico, logo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
const putProyectosService: string = "UPDATE proyectos SET nombre = ?, nif = ?, direccion = ?, codigo_postal = ?, poblacion = ?, telefono = ?, correo_electronico = ?, logo = ? WHERE id = ?";
const deleteProyectosService: string = "DELETE FROM proyectos WHERE id = ?";

export { getProyectosService, getProyectosByNombreService, getProyectosByNIFService, getProyectosByTelefonoService, getProyectosByCorreoElectronicoService, postProyectosService, putProyectosService, deleteProyectosService};
