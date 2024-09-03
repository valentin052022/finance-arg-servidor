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
  console.log(data.titulos.length)
  const data_estructured = data.titulos.map(titulo => ({
    name: titulo.simbolo,
    price: titulo.ultimoPrecio,
    volumen: titulo.volumen
  }));
  // const data_estructured = {
  //   name: data.titulo[simbolo],
  //   price: data.titulo[ultimoPrecio],
  //   nominalVolume: data.titulo[volumen],
  // }

  return data_estructured
};
