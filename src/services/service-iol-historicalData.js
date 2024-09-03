import { getToken } from "./service-iol.js";

export const getHistoricalData = async (simbolo) => {
  const actual_date = new Date().toISOString().split("T")[0];
  const ajuste = "ajustada";
  const initial_date = new Date("2023-01-01").toISOString().split("T")[0];

  const { access_token } = await getToken();

  const responseData = await fetch(
    `https://api.invertironline.com/api/v2/bCBA/Titulos/${simbolo}/Cotizacion`,
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );

  if (!responseData.ok) {
    throw new Error({ Error: "Error en la respuesta HTTP" });
  }

  const data = await responseData.json();
  const data_estructured = {
    name: data.descripcionTitulo,
    symbol: data.simbolo,
    price: data.ultimoPrecio,
    variation: data.variacion,
    tendency: data.tendencia,
    tradedAmount: data.montoOperado,
    nominalVolume: data.volumenNominal,
  };
  return data_estructured;
};
