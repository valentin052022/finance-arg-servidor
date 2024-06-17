import { getNews } from "../services/service-news.js";

export const getNewsController = async (req, res) => {
  try {
    const news = await getNews();
    return res.status(200).json(news);
  } catch (error) {
    return res.status(500).json({ messaje: error.messaje });
  }
};
