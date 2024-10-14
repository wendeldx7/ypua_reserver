import CheckIn from "../models/checkInModel.js";
import Quarto from "../models/hospedagemModel.js";

export const createCheckIn = async (request, response) => {
  const { quartoId, checkInData, checkOutData, adultos, criancas, bebes } =
    request.body;
  const { id } = request.params;
  const dataEntrada = new Date(checkInData);
  const dataSaida = new Date(checkOutData);

  const milisegundos = dataSaida.getTime() - dataEntrada.getTime();
  const dias = milisegundos / (1000 * 60 * 60 * 24);
  console.log(dias);

  try {
    const quarto = await Quarto.findByPk(id);

    if (!quarto) {
      return response.status(404).json({ message: "Quarto não encontrado" });
    }

    const precoPorNoite = quarto.precoPorNoite;
    const precototal = precoPorNoite * dias;

    const newCheckin = await CheckIn.create({
      quartoId,
      checkInData,
      checkOutData,
      adultos,
      criancas,
      bebes,
      precototal,
    });

    response.status(201).json(newCheckin);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};
