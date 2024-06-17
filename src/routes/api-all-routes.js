import express from "express";
import { getNewsController } from "../controllers/api-news-controler.js";
import { getHistoricalDataController } from "../controllers/api-iol-controler.js";

export const routes = express.Router();

routes.get("/news",getNewsController);
routes.get("/:simbolo", getHistoricalDataController);