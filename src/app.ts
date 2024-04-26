import "dotenv/config";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import router from "@routes/router";
import errorHandler from "@middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use(
    cors({
        //origin: ["http://example.com", "https://anotherdomain.com"],
        //methods: ["GET", "POST"],
        //allowedHeaders: ["Content-Type", "Authorization"],
    })
);
app.use(helmet());
app.use(morgan(process.env.TIPO_LOGS! || "dev"));

app.use("/api", router)
app.use(errorHandler)

export default app;
