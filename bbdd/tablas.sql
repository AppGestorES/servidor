CREATE TABLE proyecto (
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

CREATE TABLE materias_primas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    caducidad BIGINT NOT NULL,
    stock_kgs DECIMAL(10, 2),
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_materias_primas_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyecto(id)
);

CREATE TABLE formulas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    caducidad BIGINT NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_formulas_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyecto(id)
);

CREATE TABLE productos_finales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    formula_id INT NOT NULL,
    caducidad BIGINT NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_productos_finales_formula FOREIGN KEY (formula_id) REFERENCES formulas(id),
    CONSTRAINT fk_productos_finales_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyecto(id)
);

CREATE TABLE ingredientes (
    formula_id INT,
    materia_prima_id INT,
    cantidad_kgs DECIMAL(10, 2),
    id_proyecto INT NOT NULL,
    PRIMARY KEY (formula_id, materia_prima_id),
    CONSTRAINT fk_ingredientes_formula FOREIGN KEY (formula_id) REFERENCES formulas(id),
    CONSTRAINT fk_ingredientes_materia_prima FOREIGN KEY (materia_prima_id) REFERENCES materias_primas(id),
    CONSTRAINT fk_ingredientes_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyecto(id)
);

CREATE TABLE proveedores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_proveedores_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyecto(id)
);

CREATE TABLE envasado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_envasado_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyecto(id)
);

CREATE TABLE operarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_operarios_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyecto(id)
);

CREATE TABLE formatos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_formatos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyecto(id)
);

CREATE TABLE destinos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_destinos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyecto(id)
);

CREATE TABLE vehiculos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    matricula VARCHAR(20) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_vehiculos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyecto(id)
);

CREATE TABLE entrada_de_productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_final_id INT NOT NULL,
    fecha_entrada BIGINT NOT NULL,
    proveedor VARCHAR(255),
    numero_albaran VARCHAR(100),
    numero_lote VARCHAR(100),
    cantidad_kg DECIMAL(10, 2),
    fecha_caducidad BIGINT,
    envasado_id INT,
    operario_id INT,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_entrada_de_productos_producto_final FOREIGN KEY (producto_final_id) REFERENCES productos_finales(id),
    CONSTRAINT fk_entrada_de_productos_operario FOREIGN KEY (operario_id) REFERENCES operarios(id),
    CONSTRAINT fk_entrada_de_productos_envasado FOREIGN KEY (envasado_id) REFERENCES envasado(id),
    CONSTRAINT fk_entrada_de_productos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyecto(id)
);

CREATE TABLE salida_de_productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_final_id INT NOT NULL,
    formula_id INT NOT NULL,
    numero_lote VARCHAR(100),
    fecha_salida BIGINT,
    cantidad DECIMAL(10, 2),
    fecha_caducidad BIGINT,
    envasado_id INT,
    formato_id INT,
    destino_id INT,
    vehiculo_id INT,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_salida_de_productos_producto_final FOREIGN KEY (producto_final_id) REFERENCES productos_finales(id),
    CONSTRAINT fk_salida_de_productos_formula FOREIGN KEY (formula_id) REFERENCES formulas(id),
    CONSTRAINT fk_salida_de_productos_envasado FOREIGN KEY (envasado_id) REFERENCES envasado(id),
    CONSTRAINT fk_salida_de_productos_formato FOREIGN KEY (formato_id) REFERENCES formatos(id),
    CONSTRAINT fk_salida_de_productos_destino FOREIGN KEY (destino_id) REFERENCES destinos(id),
    CONSTRAINT fk_salida_de_productos_vehiculo FOREIGN KEY (vehiculo_id) REFERENCES vehiculos(id),
    CONSTRAINT fk_salida_de_productos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyecto(id)
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    segundo_apellido VARCHAR(100) NOT NULL,
    foto VARCHAR(100) NOT NULL,
    contrasena VARCHAR(100) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_usuarios_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyecto(id)
);

CREATE TABLE grupos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_grupos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyecto(id)
);

CREATE TABLE permisos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255),
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_permisos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyecto(id)
);

CREATE TABLE usuarios_grupos (
    usuario_id INT,
    grupo_id INT,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_usuarios_grupos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyecto(id),
    PRIMARY KEY (usuario_id, grupo_id),
    CONSTRAINT fk_usuarios_grupos_usuarios FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    CONSTRAINT fk_usuarios_grupos_grupos FOREIGN KEY (grupo_id) REFERENCES grupos(id)
);

CREATE TABLE grupos_permisos (
    grupo_id INT,
    permiso_id INT,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_grupos_permisos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyecto(id),
    PRIMARY KEY (grupo_id, permiso_id),
    CONSTRAINT fk_grupos_permisos_grupos FOREIGN KEY (grupo_id) REFERENCES grupos(id),
    CONSTRAINT fk_grupos_permisos_permisos FOREIGN KEY (permiso_id) REFERENCES permisos(id)
);

CREATE TABLE usuarios_permisos (
    usuario_id INT,
    permiso_id INT,
    id_proyecto INT NOT NULL,
    CONSTRAINT fk_usuarios_permisos_proyecto FOREIGN KEY (id_proyecto) REFERENCES proyecto(id),
    PRIMARY KEY (usuario_id, permiso_id),
    CONSTRAINT fk_usuarios_permisos_usuarios FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    CONSTRAINT fk_usuarios_permisos_permisos FOREIGN KEY (permiso_id) REFERENCES permisos(id)
);

CREATE TABLE logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha BIGINT NOT NULL,
    tipo VARCHAR(50),
    mensaje VARCHAR(50),
    version VARCHAR(10)
    usuario INT,
    CONSTRAINT fk_logs_usuario FOREIGN KEY (usuario) REFERENCES usuarios(id)
);