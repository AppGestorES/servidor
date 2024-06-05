const getFormatosService: string = "SELECT f.id, f.nombre, f.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM formatos f JOIN proyectos p ON f.id_proyecto = p.id";

const getFormatosByNombreService: string = "SELECT f.id, f.nombre, f.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM formatos f JOIN proyectos p ON f.id_proyecto = p.id WHERE f.nombre LIKE ?";

const getFormatosByProyectoService: string = "SELECT f.id, f.nombre, f.id_proyecto, p.id AS proyecto_id, p.nombre AS proyecto_nombre, p.nif AS proyecto_nif, p.direccion AS proyecto_direccion, p.codigo_postal AS proyecto_codigo_postal, p.poblacion AS proyecto_poblacion, p.telefono AS proyecto_telefono, p.correo_electronico AS proyecto_correo_electronico, p.logo AS proyecto_logo FROM formatos f JOIN proyectos p ON f.id_proyecto = p.id WHERE f.id_proyecto = ?";

const postFormatosService: string = "INSERT INTO formatos (nombre, id_proyecto) VALUES (?, ?)";

const putFormatosService: string = "UPDATE formatos SET nombre = ?, id_proyecto = ? WHERE id = ?";

const deleteFormatosService: string = "DELETE FROM formatos WHERE id = ?";

export { 
    getFormatosService, 
    getFormatosByNombreService, 
    getFormatosByProyectoService, 
    postFormatosService, 
    putFormatosService, 
    deleteFormatosService 
};
