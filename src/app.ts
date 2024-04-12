import 'dotenv/config';

import express from "express";
import cors from "cors";
import helmet from 'helmet';
import morgan from 'morgan';

import errorHandler from '@middlewares/errorHandler';

import path from "path";
import { loadRoutes } from "@utils/loadRoutes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan(process.env.TIPO_LOGS!));

app.use(
    cors({
        //origin: ["http://example.com", "https://anotherdomain.com"],
        //methods: ["GET", "POST"],
        //allowedHeaders: ["Content-Type", "Authorization"],
    })
);

const routesPath = path.join(__dirname, "routes");
loadRoutes(app, routesPath);

app.use(errorHandler);

export default app;
