import express, { Request, Response } from "express";
import morgan from "morgan";
import { StatusCodes } from "http-status-codes";

const app = express();

app.use(morgan("dev"));

const port = 3500;

app.get('/', (request: Request, response: Response) => {
  response.status(StatusCodes.OK).json({ mensaje: "Hola Mundo", estado: "Servidor funcionando correctamente" });
  response.end();
});

app.listen(port, () => {
  console.log(`El servidor esta escuchando en http://127.0.0.1:${port}`);
});
