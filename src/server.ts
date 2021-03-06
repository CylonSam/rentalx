import express, { json } from "express";
import swaggerUI from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";

import "./shared/container";

const app = express();

app.use(json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.listen(3333, () => {
  console.log("Server running on port 3333");
});
