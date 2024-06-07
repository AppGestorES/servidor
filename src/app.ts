import "dotenv/config";
import express from "express";
import swaggerUi from 'swagger-ui-express';
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import fs from 'fs';
import path from 'path';

import router from "@routes/index";
import errorHandler from "@middlewares/errorHandler";

const app = express();

const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, 'swagger.json'), 'utf8'));

// Asegurarse de que el directorio de logs existe
const logDirectory = path.join(__dirname, 'logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// Crear un write stream (en modo append) para el archivo de logs
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs', 'access.log'), { flags: 'a' });

app.use(express.json());
app.use(
    cors({
        //origin: ["http://example.com", "https://anotherdomain.com"],
        //methods: ["GET", "POST"],
        //allowedHeaders: ["Content-Type", "Authorization"],
    })
);
app.use(helmet());

// Configurar morgan para que registre en la consola y en el archivo de logs
app.use(morgan(process.env.TIPO_LOGS! || "dev", { stream: accessLogStream }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router);
app.use(errorHandler);

export default app;
