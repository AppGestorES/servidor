const postSesionesService: string = "INSERT INTO sesiones (token, fecha, usuario) VALUES (?, ?, ?)";
const iniciarSesionService: string = "SELECT id, identificador, contrasena FROM usuarios WHERE identificador = ?"
const deleteSesionService: string = "DELETE FROM sesiones WHERE usuario = ?"

export { postSesionesService, iniciarSesionService, deleteSesionService };