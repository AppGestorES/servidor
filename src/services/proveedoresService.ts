const getProveedoresService: string = "SELECT id, nombre, id_proyecto FROM proveedores";
const getProveedoresByNombreService: string = "SELECT id, nombre, id_proyecto FROM proveedores WHERE nombre LIKE ?";
const getProveedoresByProyectoService: string = "SELECT id, nombre, id_proyecto FROM proveedores WHERE id_proyecto = ?";
const postProveedoresService: string = "INSERT INTO proveedores (nombre, id_proyecto) VALUES (?, ?)";
const putProveedoresService: string = "UPDATE proveedores SET nombre = ?, id_proyecto = ? WHERE id = ?";
const deleteProveedoresService: string = "DELETE FROM proveedores WHERE id = ?";

export { getProveedoresService, getProveedoresByNombreService, getProveedoresByProyectoService, postProveedoresService, putProveedoresService, deleteProveedoresService };
