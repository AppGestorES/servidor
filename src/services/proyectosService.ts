const getProyectosService: string = "SELECT id, nombre, nif, direccion, codigo_postal, poblacion, telefono, correo_electronico, logo FROM proyecto";
const getProyectosByNombreService: string = "SELECT id, nombre, nif, direccion, codigo_postal, poblacion, telefono, correo_electronico, logo FROM proyecto WHERE nombre LIKE ?";
const getProyectosByNIFService: string = "SELECT id, nombre, nif, direccion, codigo_postal, poblacion, telefono, correo_electronico, logo FROM proyecto WHERE nif LIKE ?";
const getProyectosByTelefonoService: string = "SELECT id, nombre, nif, direccion, codigo_postal, poblacion, telefono, correo_electronico, logo FROM proyecto WHERE telefono LIKE ?";
const getProyectosByCorreoElectronicoService: string = "SELECT id, nombre, nif, direccion, codigo_postal, poblacion, telefono, correo_electronico, logo FROM proyecto WHERE correo_electronico LIKE ?";
const postProyectosService: string = "INSERT INTO proyecto (nombre, nif, direccion, codigo_postal, poblacion, telefono, correo_electronico, logo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
const putProyectosService: string = "UPDATE proyecto SET nombre = ?, nif = ?, direccion = ?, codigo_postal = ?, poblacion = ?, telefono = ?, correo_electronico = ?, logo = ? WHERE id = ?";
const deleteProyectosService: string = "DELETE FROM proyecto WHERE id = ?";

export { getProyectosService, getProyectosByNombreService, getProyectosByNIFService, getProyectosByTelefonoService, getProyectosByCorreoElectronicoService, postProyectosService, putProyectosService, deleteProyectosService};
