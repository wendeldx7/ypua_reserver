import CheckIn from "../models/checkInModel.js";
import Quarto from "../models/hospedagemModel.js";
import { Op } from "sequelize";

export const createCheckIn = async (request, response) => {
  const { quartoId } = request.params;
  const { checkInData, checkOutData, adultos, criancas, bebes, nome } = request.body; // Adiciona o campo nome

  const dataEntrada = new Date(checkInData);
  const dataSaida = new Date(checkOutData);

  if (dataEntrada >= dataSaida) {
    return response
      .status(400)
      .json({
        message:
          "A data de entrada não pode ser depois/maior que a data de saída.",
      });
  }

  const milisegundos = dataSaida.getTime() - dataEntrada.getTime();
  const dias = milisegundos / (1000 * 60 * 60 * 24);

  if (dias <= 0) {
    return response
      .status(400)
      .json({ message: "A quantidade de dias precisa ser maior que zero." });
  }

  try {
    const quarto = await Quarto.findByPk(quartoId);
    if (!quarto) {
      return response.status(404).json({ message: "Quarto não encontrado" });
    }

    if (
      quarto.situacao === "reservado" ||
      quarto.situacao === "em manutenção"
    ) {
      return response
        .status(400)
        .json({ message: "O quarto está indisponível para reserva." });
    }

    const checkInExistente = await CheckIn.findOne({
      where: {
        quartoId,
        [Op.or]: [
          { checkInData: { [Op.between]: [dataEntrada, dataSaida] } },
          { checkOutData: { [Op.between]: [dataEntrada, dataSaida] } },
          {
            checkInData: { [Op.lte]: dataEntrada },
            checkOutData: { [Op.gte]: dataSaida },
          },
        ],
      },
    });

    if (checkInExistente) {
      return response
        .status(400)
        .json({
          message: "Este quarto já está reservado para o período selecionado.",
        });
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
      nome,
   // Aqui você passa o nome da pessoa que fez a reserva
    });

    await quarto.update({ situacao: "reservado" });

    const checkinComNomeQuarto = await CheckIn.findByPk(newCheckin.checkId, {
      include: [
        {
          model: Quarto,
          attributes: ["quarto"], // Incluindo o nome do quarto
        },
      ],
    });

    response.status(201).json(checkinComNomeQuarto);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};


export const getAllCheckIn = async (request, response) => {
  try {
    const allCheckin = await CheckIn.findAll({
      include: {
        model: Quarto,
        attributes: ["quarto"],
      },
    });

    if (!allCheckin) {
      return response
        .status(404)
        .json({ message: "Não há check-in cadastrado" });
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
    const checkIn = await CheckIn.findByPk(id, {
      include: [
        {
          model: Quarto,
          attributes: ["quarto"], // Incluindo o nome do quarto
        },
      ],
    });

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

    if (
      updateData.checkOutData &&
      new Date(updateData.checkOutData) <= new Date(checkIn.checkInData)
    ) {
      return response
        .status(400)
        .json({
          message: "Data de saída deve ser depois/maior que a data de entrada.",
        });
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
