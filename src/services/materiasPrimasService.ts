const getMateriasPrimasService: string =
    "SELECT mp.id, mp.nombre, mp.caducidad, mp.stock_kgs, mp.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM materias_primas mp JOIN proyectos p ON mp.id_proyecto = p.id";

const getMateriasPrimasByNombreService: string =
    "SELECT mp.id, mp.nombre, mp.caducidad, mp.stock_kgs, mp.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM materias_primas mp JOIN proyectos p ON mp.id_proyecto = p.id WHERE mp.nombre LIKE ?";

const getMateriasPrimasByProyectoService: string =
    "SELECT mp.id, mp.nombre, mp.caducidad, mp.stock_kgs, mp.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM materias_primas mp JOIN proyectos p ON mp.id_proyecto = p.id WHERE mp.id_proyecto = ?";

const postMateriasPrimasService: string =
    "INSERT INTO materias_primas (nombre, caducidad, stock_kgs, id_proyecto) VALUES (?, ?, ?, ?)";

const putMateriasPrimasService: string =
    "UPDATE materias_primas SET nombre = ?, caducidad = ?, stock_kgs = ?, id_proyecto = ? WHERE id = ?";

const deleteMateriasPrimasService: string =
    "DELETE FROM materias_primas WHERE id = ?";

export {
    getMateriasPrimasService,
    getMateriasPrimasByNombreService,
    getMateriasPrimasByProyectoService,
    postMateriasPrimasService,
    putMateriasPrimasService,
    deleteMateriasPrimasService,
};
