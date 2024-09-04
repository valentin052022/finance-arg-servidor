import { getToken } from "./service-iol.js";

export const getDataCotizacion = async (instrumento, page = 1, limit = 10) => {
  const { access_token } = await getToken();
  const responseData = await fetch(
    `https://api.invertironline.com/api/v2/Cotizaciones/${instrumento}/argentina/Todos`,
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );

  if (!responseData.ok) {
    throw new Error({ Error: "Error en la respuesta HTTP" });
  }

  const data = await responseData.json();
  const data_estructured = data.titulos.map((titulo) => ({
    simbolo: titulo.simbolo,
    name: titulo.descripcion,
    price: titulo.ultimoPrecio,
    volumen: titulo.volumen,
    variacion: titulo.variacionPorcentual
  }));

  
  // Calcular los índices para la paginación
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  // Devolver solo los datos correspondientes a la página solicitada
  const paginatedData = data_estructured.slice(startIndex, endIndex);

  return {
    currentPage: page,
    totalItems: data_estructured.length,
    totalPages: Math.ceil(data_estructured.length / limit),
    data: paginatedData,
  };
};
