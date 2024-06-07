const getProveedoresService: string =
    "SELECT p.id, p.nombre, p.id_proyecto, pr.id AS proyecto_id, pr.nombre AS proyecto_nombre, pr.nif AS proyecto_nif, pr.direccion AS proyecto_direccion, pr.codigo_postal AS proyecto_codigo_postal, pr.poblacion AS proyecto_poblacion, pr.telefono AS proyecto_telefono, pr.correo_electronico AS proyecto_correo_electronico, pr.logo AS proyecto_logo FROM proveedores p JOIN proyectos pr ON p.id_proyecto = pr.id";

const getProveedoresByNombreService: string =
    "SELECT p.id, p.nombre, p.id_proyecto, pr.id AS proyecto_id, pr.nombre AS proyecto_nombre, pr.nif AS proyecto_nif, pr.direccion AS proyecto_direccion, pr.codigo_postal AS proyecto_codigo_postal, pr.poblacion AS proyecto_poblacion, pr.telefono AS proyecto_telefono, pr.correo_electronico AS proyecto_correo_electronico, pr.logo AS proyecto_logo FROM proveedores p JOIN proyectos pr ON p.id_proyecto = pr.id WHERE p.nombre LIKE ?";

const getProveedoresByProyectoService: string =
    "SELECT p.id, p.nombre, p.id_proyecto, pr.id AS proyecto_id, pr.nombre AS proyecto_nombre, pr.nif AS proyecto_nif, pr.direccion AS proyecto_direccion, pr.codigo_postal AS proyecto_codigo_postal, pr.poblacion AS proyecto_poblacion, pr.telefono AS proyecto_telefono, pr.correo_electronico AS proyecto_correo_electronico, pr.logo AS proyecto_logo FROM proveedores p JOIN proyectos pr ON p.id_proyecto = pr.id WHERE p.id_proyecto = ?";

const postProveedoresService: string =
    "INSERT INTO proveedores (nombre, id_proyecto) VALUES (?, ?)";

const putProveedoresService: string =
    "UPDATE proveedores SET nombre = ?, id_proyecto = ? WHERE id = ?";

const deleteProveedoresService: string = "DELETE FROM proveedores WHERE id = ?";

export {
    getProveedoresService,
    getProveedoresByNombreService,
    getProveedoresByProyectoService,
    postProveedoresService,
    putProveedoresService,
    deleteProveedoresService,
};
