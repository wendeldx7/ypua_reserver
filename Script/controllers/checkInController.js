import CheckIn from "../models/checkInModel.js";
import Quarto from "../models/hospedagemModel.js";

export const createCheckIn = async (request, response) => {
  const { quartoId } = request.params;
  const { checkInData, checkOutData, adultos, criancas, bebes } = request.body;
  console.log(quartoId);

  const dataEntrada = new Date(checkInData);
  const dataSaida = new Date(checkOutData);

  const milisegundos = dataSaida.getTime() - dataEntrada.getTime();
  const dias = milisegundos / (1000 * 60 * 60 * 24);

  try {
    const quarto = await Quarto.findByPk(quartoId);

    if (!quarto) {
      return response.status(404).json({ message: "Quarto não encontrado" });
    }

    const precoPorNoite = quarto.precoPorNoite;
    const precoTotal = precoPorNoite * dias;

    const newCheckin = await CheckIn.create({
      quartoId,
      checkInData,
      checkOutData,
      adultos,
      criancas,
      bebes,
      precoTotal,
    });

    response.status(201).json(newCheckin);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};
