const getMateriasPrimasService: string = "SELECT * FROM materias_primas";
const postMateriasPrimasService: string = "INSERT INTO materias_primas (nombre, caducidad, stock_kgs, id_proyecto) VALUES (?, ?, ?, ?)";

export { getMateriasPrimasService, postMateriasPrimasService };
