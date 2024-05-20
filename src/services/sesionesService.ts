const postSesionesService: string = "INSERT INTO sesiones (token, fecha, usuario) VALUES (?, ?, ?)";
const iniciarSesionService: string = "SELECT id, identificador, contrasena FROM usuarios WHERE identificador = ?"

export { postSesionesService, iniciarSesionService };