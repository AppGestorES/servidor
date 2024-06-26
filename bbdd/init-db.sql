CREATE DATABASE IF NOT EXISTS dev;

USE dev;
CREATE TABLE IF NOT EXISTS proyectos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    nif VARCHAR(9),
    direccion VARCHAR(255),
    codigo_postal VARCHAR(10),
    poblacion VARCHAR(100),
    telefono VARCHAR(15),
    correo_electronico VARCHAR(100),
    logo VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS materias_primas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    caducidad INT(10) NOT NULL,
    stock_kgs DECIMAL(10, 2),
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_materias_primas_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS formulas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    caducidad INT(10) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_formulas_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS productos_finales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    formula_id INT NOT NULL,
    caducidad INT(10) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_productos_finales_formula FOREIGN KEY (formula_id) REFERENCES formulas(id),
    CONSTRAINT fk_productos_finales_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS ingredientes (
    formula_id INT,
    materia_prima_id INT,
    cantidad_kgs DECIMAL(10, 2),
    id_proyecto INT NOT NULL,
    PRIMARY KEY (formula_id, materia_prima_id),
    CONSTRAINT fk_ingredientes_formula FOREIGN KEY (formula_id) REFERENCES formulas(id),
    CONSTRAINT fk_ingredientes_materia_prima FOREIGN KEY (materia_prima_id) REFERENCES materias_primas(id),
    CONSTRAINT fk_ingredientes_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS proveedores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_proveedores_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS envasados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_envasado_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS operarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_operarios_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS formatos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_formatos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS destinos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_destinos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS vehiculos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    matricula VARCHAR(20) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_vehiculos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS entrada_de_productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_final_id INT NOT NULL,
    fecha_entrada INT(10) NOT NULL,
    proveedor VARCHAR(255),
    numero_albaran VARCHAR(100),
    numero_lote VARCHAR(100),
    cantidad_kg DECIMAL(10, 2),
    fecha_caducidad INT(10),
    envasado_id INT,
    operario_id INT,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_entrada_de_productos_producto_final FOREIGN KEY (producto_final_id) REFERENCES productos_finales(id),
    CONSTRAINT fk_entrada_de_productos_operario FOREIGN KEY (operario_id) REFERENCES operarios(id),
    CONSTRAINT fk_entrada_de_productos_envasado FOREIGN KEY (envasado_id) REFERENCES envasados(id),
    CONSTRAINT fk_entrada_de_productos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS salida_de_productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_final_id INT NOT NULL,
    formula_id INT NOT NULL,
    numero_lote VARCHAR(100),
    fecha_salida INT(10),
    cantidad DECIMAL(10, 2),
    fecha_caducidad INT(10),
    envasado_id INT,
    formato_id INT,
    destino_id INT,
    vehiculo_id INT,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_salida_de_productos_producto_final FOREIGN KEY (producto_final_id) REFERENCES productos_finales(id),
    CONSTRAINT fk_salida_de_productos_formula FOREIGN KEY (formula_id) REFERENCES formulas(id),
    CONSTRAINT fk_salida_de_productos_envasado FOREIGN KEY (envasado_id) REFERENCES envasados(id),
    CONSTRAINT fk_salida_de_productos_formato FOREIGN KEY (formato_id) REFERENCES formatos(id),
    CONSTRAINT fk_salida_de_productos_destino FOREIGN KEY (destino_id) REFERENCES destinos(id),
    CONSTRAINT fk_salida_de_productos_vehiculo FOREIGN KEY (vehiculo_id) REFERENCES vehiculos(id),
    CONSTRAINT fk_salida_de_productos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    foto VARCHAR(100),
    contrasena VARCHAR(100) NOT NULL,
    identificador VARCHAR(100) NOT NULL UNIQUE,
    id_proyecto INT,
    es_admin INT DEFAULT 0,
    proyecto_admin INT,
    CONSTRAINT fk_usuarios_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id),
    CONSTRAINT fk_usuariosadmin_proyecto FOREIGN KEY (proyecto_admin) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS grupos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_grupos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS permisos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255),
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_permisos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS usuarios_grupos (
    usuario_id INT,
    grupo_id INT,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_usuarios_grupos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id),
    PRIMARY KEY (usuario_id, grupo_id),
    CONSTRAINT fk_usuarios_grupos_usuarios FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    CONSTRAINT fk_usuarios_grupos_grupos FOREIGN KEY (grupo_id) REFERENCES grupos(id)
);

CREATE TABLE IF NOT EXISTS grupos_permisos (
    grupo_id INT,
    permiso_id INT,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_grupos_permisos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id),
    PRIMARY KEY (grupo_id, permiso_id),
    CONSTRAINT fk_grupos_permisos_grupos FOREIGN KEY (grupo_id) REFERENCES grupos(id),
    CONSTRAINT fk_grupos_permisos_permisos FOREIGN KEY (permiso_id) REFERENCES permisos(id)
);

CREATE TABLE IF NOT EXISTS usuarios_permisos (
    usuario_id INT,
    permiso_id INT,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_usuarios_permisos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id),
    PRIMARY KEY (usuario_id, permiso_id),
    CONSTRAINT fk_usuarios_permisos_usuarios FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    CONSTRAINT fk_usuarios_permisos_permisos FOREIGN KEY (permiso_id) REFERENCES permisos(id)
);

CREATE TABLE IF NOT EXISTS logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha INT(10) NOT NULL,
    tipo VARCHAR(50),
    mensaje VARCHAR(50),
    version VARCHAR(10),
    usuario INT,
    CONSTRAINT fk_logs_usuario FOREIGN KEY (usuario) REFERENCES usuarios(id)
);

CREATE TABLE IF NOT EXISTS sesiones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    token VARCHAR(255) NOT NULL,
    fecha INT(10) NOT NULL,
    usuario INT,
    CONSTRAINT fk_sesiones_usuario FOREIGN KEY (usuario) REFERENCES usuarios(id)
);

USE $ { DATABASESQL };
CREATE TABLE IF NOT EXISTS proyectos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    nif VARCHAR(9),
    direccion VARCHAR(255),
    codigo_postal VARCHAR(10),
    poblacion VARCHAR(100),
    telefono VARCHAR(15),
    correo_electronico VARCHAR(100),
    logo VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS materias_primas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    caducidad INT(10) NOT NULL,
    stock_kgs DECIMAL(10, 2),
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_materias_primas_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS formulas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    caducidad INT(10) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_formulas_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS productos_finales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    formula_id INT NOT NULL,
    caducidad INT(10) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_productos_finales_formula FOREIGN KEY (formula_id) REFERENCES formulas(id),
    CONSTRAINT fk_productos_finales_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS ingredientes (
    formula_id INT,
    materia_prima_id INT,
    cantidad_kgs DECIMAL(10, 2),
    id_proyecto INT NOT NULL,
    PRIMARY KEY (formula_id, materia_prima_id),
    CONSTRAINT fk_ingredientes_formula FOREIGN KEY (formula_id) REFERENCES formulas(id),
    CONSTRAINT fk_ingredientes_materia_prima FOREIGN KEY (materia_prima_id) REFERENCES materias_primas(id),
    CONSTRAINT fk_ingredientes_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS proveedores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_proveedores_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS envasados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_envasado_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS operarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_operarios_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS formatos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_formatos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS destinos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_destinos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS vehiculos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    matricula VARCHAR(20) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_vehiculos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS entrada_de_productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_final_id INT NOT NULL,
    fecha_entrada INT(10) NOT NULL,
    proveedor VARCHAR(255),
    numero_albaran VARCHAR(100),
    numero_lote VARCHAR(100),
    cantidad_kg DECIMAL(10, 2),
    fecha_caducidad INT(10),
    envasado_id INT,
    operario_id INT,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_entrada_de_productos_producto_final FOREIGN KEY (producto_final_id) REFERENCES productos_finales(id),
    CONSTRAINT fk_entrada_de_productos_operario FOREIGN KEY (operario_id) REFERENCES operarios(id),
    CONSTRAINT fk_entrada_de_productos_envasado FOREIGN KEY (envasado_id) REFERENCES envasados(id),
    CONSTRAINT fk_entrada_de_productos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS salida_de_productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_final_id INT NOT NULL,
    formula_id INT NOT NULL,
    numero_lote VARCHAR(100),
    fecha_salida INT(10),
    cantidad DECIMAL(10, 2),
    fecha_caducidad INT(10),
    envasado_id INT,
    formato_id INT,
    destino_id INT,
    vehiculo_id INT,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_salida_de_productos_producto_final FOREIGN KEY (producto_final_id) REFERENCES productos_finales(id),
    CONSTRAINT fk_salida_de_productos_formula FOREIGN KEY (formula_id) REFERENCES formulas(id),
    CONSTRAINT fk_salida_de_productos_envasado FOREIGN KEY (envasado_id) REFERENCES envasados(id),
    CONSTRAINT fk_salida_de_productos_formato FOREIGN KEY (formato_id) REFERENCES formatos(id),
    CONSTRAINT fk_salida_de_productos_destino FOREIGN KEY (destino_id) REFERENCES destinos(id),
    CONSTRAINT fk_salida_de_productos_vehiculo FOREIGN KEY (vehiculo_id) REFERENCES vehiculos(id),
    CONSTRAINT fk_salida_de_productos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    foto VARCHAR(100),
    contrasena VARCHAR(100) NOT NULL,
    identificador VARCHAR(100) NOT NULL UNIQUE,
    id_proyecto INT,
    es_admin INT DEFAULT 0,
    proyecto_admin INT,
    CONSTRAINT fk_usuarios_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id),
    CONSTRAINT fk_usuariosadmin_proyecto FOREIGN KEY (proyecto_admin) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS grupos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_grupos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS permisos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255),
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_permisos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id)
);

CREATE TABLE IF NOT EXISTS usuarios_grupos (
    usuario_id INT,
    grupo_id INT,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_usuarios_grupos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id),
    PRIMARY KEY (usuario_id, grupo_id),
    CONSTRAINT fk_usuarios_grupos_usuarios FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    CONSTRAINT fk_usuarios_grupos_grupos FOREIGN KEY (grupo_id) REFERENCES grupos(id)
);

CREATE TABLE IF NOT EXISTS grupos_permisos (
    grupo_id INT,
    permiso_id INT,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_grupos_permisos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id),
    PRIMARY KEY (grupo_id, permiso_id),
    CONSTRAINT fk_grupos_permisos_grupos FOREIGN KEY (grupo_id) REFERENCES grupos(id),
    CONSTRAINT fk_grupos_permisos_permisos FOREIGN KEY (permiso_id) REFERENCES permisos(id)
);

CREATE TABLE IF NOT EXISTS usuarios_permisos (
    usuario_id INT,
    permiso_id INT,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_usuarios_permisos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyectos(id),
    PRIMARY KEY (usuario_id, permiso_id),
    CONSTRAINT fk_usuarios_permisos_usuarios FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    CONSTRAINT fk_usuarios_permisos_permisos FOREIGN KEY (permiso_id) REFERENCES permisos(id)
);

CREATE TABLE IF NOT EXISTS logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha INT(10) NOT NULL,
    tipo VARCHAR(50),
    mensaje VARCHAR(50),
    version VARCHAR(10),
    usuario INT,
    CONSTRAINT fk_logs_usuario FOREIGN KEY (usuario) REFERENCES usuarios(id)
);

CREATE TABLE IF NOT EXISTS sesiones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    token VARCHAR(255) NOT NULL,
    fecha INT(10) NOT NULL,
    usuario INT,
    CONSTRAINT fk_sesiones_usuario FOREIGN KEY (usuario) REFERENCES usuarios(id)
);