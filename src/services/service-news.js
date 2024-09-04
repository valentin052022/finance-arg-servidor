import fetch from "node-fetch";
import { config } from "dotenv";

config();
const api_key = process.env.API_KEY_NEWS;

let busqueda = 'argentina AND (economia OR negocios OR empresas OR inflacion OR inversiones OR finanzas OR mercado OR "situación económica" OR "actividad económica" OR "sector privado" OR "sector público" OR "política económica" OR "mercado de valores" OR "tipo de cambio" OR "exportaciones" OR "importaciones" OR "deuda externa" OR "indicadores económicos" OR "producto bruto interno" OR "recesión" OR "crecimiento económico" OR "desempleo" OR "dolar blue" OR "inversión extranjera")';
const api_news_arg = `https://newsapi.org/v2/everything?q=${encodeURIComponent(busqueda)}&language=es&pageSize=100&sortBy=relevancy&apiKey=${api_key}`;
const api_news_global = `https://newsapi.org/v2/everything?q=business&language=es&apiKey=${api_key}`;

export const getNewsArg = async () => {
  const newsResponse = await fetch(api_news_arg);
  if (!newsResponse.ok) {
    throw new Error(`HTTP error! status: ${newsResponse.status}`);
  }
  const data = await newsResponse.json();
  console.log(data.totalResults)
  const data_estrutured = data.articles.map((articulos) => ({
    title: articulos.title,
    description: articulos.description,
    url: articulos.url,
    url_image: articulos.urlToImage,
  }));
  return data_estrutured;
};

export const getNewsGlobal = async () => {
  const newsResponse = await fetch(api_news_global);
  if (!newsResponse.ok) {
    throw new Error(`HTTP error! status: ${newsResponse.status}`);
  }
  const data = await newsResponse.json();
  const data_estrutured = data.articles.map((articulos) => ({
    title: articulos.title,
    description: articulos.description,
    url: articulos.url,
    url_image: articulos.urlToImage,
  }));
  return data_estrutured;
};
