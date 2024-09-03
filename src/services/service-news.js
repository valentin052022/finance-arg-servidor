import fetch from "node-fetch";
import { config } from "dotenv";

config();
const api_key = process.env.API_KEY_NEWS;
const api_news_arg = `https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=${api_key}`;
const api_news_global = `https://newsapi.org/v2/everything?q=business&language=es&apiKey=${api_key}`

export const getNewsArg = async () => {
  const newsResponse = await fetch(api_news_arg);
  if (!newsResponse.ok) {
    throw new Error(`HTTP error! status: ${newsResponse.status}`);
  }
  const data = await newsResponse.json();
  return data;
};

export const getNewsGlobal = async () => {
  const newsResponse = await fetch(api_news_global);
  if (!newsResponse.ok) {
    throw new Error(`HTTP error! status: ${newsResponse.status}`);
  }
  const data = await newsResponse.json();
  return data;
}