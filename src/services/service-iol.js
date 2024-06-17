import fetch from "node-fetch";
import { config } from "dotenv";

config();

const api_iol = `https://api.invertironline.com/token`;
const personal_data = {
  username: process.env.IOL_USERNAME,
  password: process.env.IOL_PASS,
  grant_type: "password",
};

export const getToken = async () => {
  try {
    const newsResponse = await fetch(api_iol, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(personal_data),
    });

    if (!newsResponse.ok) {
      throw new Error(`HTTP error! status: ${newsResponse.status}`);
    }

    const data = await newsResponse.json();

    const info = {
      access_token: data["access_token"],
      refresh_token: data["refresh_token"],
      start: data[".issued"],
      expiration: data[".expires"],
    };

    return info;
  } catch (error) {
    console.error("Error fetching token:", error.message);
    return null;
  }
};
