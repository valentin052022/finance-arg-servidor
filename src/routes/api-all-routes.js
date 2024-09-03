import express from "express";
import {getNewsControllerArg, getNewsControllerGlobal } from "../controllers/api-news-controler.js";
import { getDataCotizacionController, getHistoricalDataController } from "../controllers/api-iol-controler.js";

export const routes = express.Router();
// routes of news for frontendFinanceBale
routes.get("/news/global", getNewsControllerGlobal);
routes.get("/news/arg", getNewsControllerArg);
// routes from cotizacion the actives
routes.get("/instrumento/:instrumento", getDataCotizacionController);
// routes.get("/:simbolo", getHistoricalDataController);