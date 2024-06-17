import fetch from "node-fetch";
import { config } from "dotenv";

config();
const api_key = process.env.API_KEY_NEWS;
const api_news = `https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=${api_key}`;

export const getNews = async () => {
  const newsResponse = await fetch(api_news);
  if (!newsResponse.ok) {
    throw new Error(`HTTP error! status: ${newsResponse.status}`);
  }
  const data = await newsResponse.json();
  return data;
};
