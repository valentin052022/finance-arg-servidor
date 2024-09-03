import { getToken } from "./service-iol.js";

export const getDataCotizacion = async (instrumento) => {

  const { access_token } = await getToken();
  const  responseData = await fetch(
    `https://api.invertironline.com/api/v2/Cotizaciones/${instrumento}/argentina/Todos`,
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  ); 

  if(!responseData.ok){
    throw new Error({Error: "Error en la respuesta HTTP"})
  }

  const data = await responseData.json()
  const data_estructured = {
    name: data.simbolo,
    price: data.ultimoPrecio,
    nominalVolume: data.volumen,
  }

  return data_estructured
};
