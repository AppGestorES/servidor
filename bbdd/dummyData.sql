-- Insertar datos en la tabla proyectos
INSERT INTO proyectos (nombre, nif, direccion, codigo_postal, poblacion, telefono, correo_electronico, logo) VALUES
('Proyecto A', '12345678A', 'Calle Falsa 123', '28080', 'Madrid', '600123456', 'proyectoA@example.com', 'logoA.png'),
('Proyecto B', '87654321B', 'Avenida Siempreviva 742', '08080', 'Barcelona', '600654321', 'proyectoB@example.com', 'logoB.png');

-- Insertar datos en la tabla materias_primas
INSERT INTO materias_primas (nombre, caducidad, stock_kgs, id_proyecto) VALUES
('Materia Prima 1', 365, 100.50, 1),
('Materia Prima 2', 180, 200.75, 2);

-- Insertar datos en la tabla formulas
INSERT INTO formulas (nombre, caducidad, id_proyecto) VALUES
('Formula 1', 365, 1),
('Formula 2', 180, 2);

-- Insertar datos en la tabla productos_finales
INSERT INTO productos_finales (nombre, formula_id, caducidad, id_proyecto) VALUES
('Producto Final 1', 1, 365, 1),
('Producto Final 2', 2, 180, 2);

-- Insertar datos en la tabla ingredientes
INSERT INTO ingredientes (formula_id, materia_prima_id, cantidad_kgs, id_proyecto) VALUES
(1, 1, 50.25, 1),
(2, 2, 75.30, 2);

-- Insertar datos en la tabla proveedores
INSERT INTO proveedores (nombre, id_proyecto) VALUES
('Proveedor 1', 1),
('Proveedor 2', 2);

-- Insertar datos en la tabla envasados
INSERT INTO envasados (nombre, id_proyecto) VALUES
('Envasado 1', 1),
('Envasado 2', 2);

-- Insertar datos en la tabla operarios
INSERT INTO operarios (nombre, id_proyecto) VALUES
('Operario 1', 1),
('Operario 2', 2);

-- Insertar datos en la tabla formatos
INSERT INTO formatos (nombre, id_proyecto) VALUES
('Formato 1', 1),
('Formato 2', 2);

-- Insertar datos en la tabla destinos
INSERT INTO destinos (nombre, id_proyecto) VALUES
('Destino 1', 1),
('Destino 2', 2);

-- Insertar datos en la tabla vehiculos
INSERT INTO vehiculos (matricula, id_proyecto) VALUES
('1234ABC', 1),
('5678DEF', 2);

-- Insertar datos en la tabla entrada_de_productos
INSERT INTO entrada_de_productos (producto_final_id, fecha_entrada, proveedor, numero_albaran, numero_lote, cantidad_kg, fecha_caducidad, envasado_id, operario_id, id_proyecto) VALUES
(1, 1672531199, 'Proveedor 1', 'A123', 'L123', 500.50, 1682531199, 1, 1, 1),
(2, 1672531199, 'Proveedor 2', 'B456', 'L456', 300.30, 1682531199, 2, 2, 2);

-- Insertar datos en la tabla salida_de_productos
INSERT INTO salida_de_productos (producto_final_id, formula_id, numero_lote, fecha_salida, cantidad, fecha_caducidad, envasado_id, formato_id, destino_id, vehiculo_id, id_proyecto) VALUES
(1, 1, 'L123', 1672531199, 200.20, 1682531199, 1, 1, 1, 1, 1),
(2, 2, 'L456', 1672531199, 150.15, 1682531199, 2, 2, 2, 2, 2);

-- Insertar datos en la tabla usuarios
INSERT INTO usuarios (nombre, apellido, foto, contrasena, identificador) VALUES
('Usuario 1', 'Apellido 1', 'foto1.png', 'contrasena1', 'id21'),
('Usuario 2', 'Apellido 2', 'foto2.png', 'contrasena2', 'id32');

-- Insertar datos en la tabla grupos
INSERT INTO grupos (nombre, id_proyecto) VALUES
('Grupo 1', 1),
('Grupo 2', 2);

-- Insertar datos en la tabla permisos
INSERT INTO permisos (nombre, descripcion, id_proyecto) VALUES
('Permiso 1', 'Descripción 1', 1),
('Permiso 2', 'Descripción 2', 2);

-- Insertar datos en la tabla usuarios_grupos
INSERT INTO usuarios_grupos (usuario_id, grupo_id, id_proyecto) VALUES
(1, 1, 1),
(2, 2, 2);

-- Insertar datos en la tabla grupos_permisos
INSERT INTO grupos_permisos (grupo_id, permiso_id, id_proyecto) VALUES
(1, 1, 1),
(2, 2, 2);

-- Insertar datos en la tabla usuarios_permisos
INSERT INTO usuarios_permisos (usuario_id, permiso_id, id_proyecto) VALUES
(1, 1, 1),
(2, 2, 2);

-- Insertar datos en la tabla logs
INSERT INTO logs (fecha, tipo, mensaje, version, usuario) VALUES
(1672531199, 'INFO', 'Mensaje de log 1', '1.0', 1),
(1672531199, 'ERROR', 'Mensaje de log 2', '1.0', 2);

-- Insertar datos en la tabla sesiones
INSERT INTO sesiones (token, fecha, usuario) VALUES
('token123', 1672531199, 1),
('token456', 1672531199, 2);
