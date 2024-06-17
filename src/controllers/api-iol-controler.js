import { getHistoricalData } from "../services/service-iol-historicalData.js";

export const getHistoricalDataController = async (req, res) => {
  try {
    const { simbolo} = req.params;

    if (!simbolo) {
      return res.status(400).json({ message: "Simbolo no encontrado" });
    }

    const historicalDataPrices = await getHistoricalData(simbolo);

    if (!historicalDataPrices || historicalDataPrices.length === 0) {
      return res
        .status(404)
        .json({ message: "Datos históricos no encontrados" });
    }

    return res.status(200).json(historicalDataPrices);
  } catch (error) {
    console.error("Error en getHistoricalDataController:", error.message);
    return res.status(500).json({ message: error.message });
  }
};
