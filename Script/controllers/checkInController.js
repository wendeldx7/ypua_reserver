import CheckIn from "../models/checkInModel.js";
import Quarto from "../models/hospedagemModel.js";

export const createCheckIn = async (request, response) => {
  const { quartoId } = request.params;
  const { checkInData, checkOutData, adultos, criancas, bebes } = request.body;
  console.log(quartoId);

  const dataEntrada = new Date(checkInData);
  const dataSaida = new Date(checkOutData);

  if (dataEntrada >= dataSaida) {
    return response.status(400).json({ message: "A data de entrada não pode ser depois/maior que data de saída." });
  }

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

export const getAllCheckIn = async (request, response) => {
  try {
    const allCheckin = await CheckIn.findAll();

    if (!allCheckin) {
      return response.status(404).json({ message: "Não há check-in cadastrado" });
    }
    response.status(200).json(allCheckin);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export const getCheckIn = async (request, response) => {
  const { id } = request.params;

  try {
    const checkIn = await CheckIn.findByPk(id);

    if (!checkIn) {
      return response.status(404).json({ message: "Check-in não encontrado" });
    }

    response.status(200).json(checkIn);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export const updateCheckIn = async (request, response) => {
  const { id } = request.params;
  const updateData = request.body; //esse updateDate so atualiza os campos q mandaram informação, e esses campos precisa exister no Model!!

  try {
    const checkIn = await CheckIn.findByPk(id);

    if (!checkIn) {
      return response.status(404).json({ message: "Check-in não encontrado" });
    }

    if (updateData.checkOutData && new Date(updateData.checkOutData) <= new Date(checkIn.checkInData)) {
      return response.status(400).json({ message: "Data de saída deve ser depois/maior que a data de entrada." });
    }
    

    await checkIn.update(updateData);
    response.status(200).json(checkIn);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

export const deleteCheckIn = async (request, response) => {
  const { id } = request.params;

  try {
    const checkIn = await CheckIn.findByPk(id);

    if (!checkIn) {
      return response.status(404).json({ message: "Check-in não encontrado" });
    }

    await checkIn.destroy();
    response.status(204).send();
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};
