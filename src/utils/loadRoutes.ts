import fs from "fs";
import path from "path";
import { Express } from "express";

export const loadRoutes = (app: Express, routesPath: string): void => {
    fs.readdirSync(routesPath).forEach((file) => {
        const ext = path.extname(file);
        if (ext === ".ts" || ext === ".js") {
            const route = path.basename(file, ext);
            import(path.join(routesPath, file))
                .then((module) => {
                    app.use(`/${route}`, module.default);
                })
                .catch((err) =>
                    console.error(`Failed to load route ${file}: ${err}`)
                );
        }
    });
};
