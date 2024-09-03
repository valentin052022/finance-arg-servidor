import {getNewsArg, getNewsGlobal } from "../services/service-news.js";

export const getNewsControllerArg = async (req, res) => {
  try {
    const news = await getNewsArg();
    return res.status(200).json(news);
  } catch (error) {
    return res.status(500).json({ messaje: error.messaje });
  }
};

export const getNewsControllerGlobal = async (req, res) => {
  try {
    const news = await getNewsGlobal();
    return res.status(200).json(news);
  } catch (error) {
    return res.status(500).json({ messaje: error.messaje });
  }
};