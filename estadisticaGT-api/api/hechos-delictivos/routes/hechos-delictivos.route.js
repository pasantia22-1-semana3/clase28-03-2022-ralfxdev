import express from "express";
import { EstadisticaController } from "../controllers/hechos-delictivos.controller.js";

const estadisticaController = new EstadisticaController();

const routerEstadistica = express.Router();

//Ruta para obtener todas las playlists
routerEstadistica.get("/", estadisticaController.getAllEstadistica);

//Ruta para obtener una sola playlist
routerEstadistica.get("/:type", estadisticaController.getOneEstadistica);

export default routerEstadistica;