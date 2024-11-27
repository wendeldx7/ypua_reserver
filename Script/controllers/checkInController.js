import CheckIn from "../models/checkInModel.js";
import Quarto from "../models/hospedagemModel.js";
import Disponibilidade from "../models/disponibilidadeModel.js";
import { Op } from "sequelize";

export const createCheckIn = async (request, response) => {
  const { quartoId } = request.params;
  const { checkInData, checkOutData, adultos, criancas, bebes, nome } = request.body;

  try {
    // Verifica se o quarto existe
    const quarto = await Quarto.findByPk(quartoId);
    if (!quarto) {
      return response.status(404).json({ message: "Quarto não encontrado" });
    }

    // Verifica conflitos de datas
    const conflito = await Disponibilidade.findOne({
      where: {
        quartoId,
        [Op.or]: [
          { dataInicio: { [Op.between]: [checkInData, checkOutData] } },
          { dataFim: { [Op.between]: [checkInData, checkOutData] } },
          {
            dataInicio: { [Op.lte]: checkInData },
            dataFim: { [Op.gte]: checkOutData },
          },
        ],
      },
    });

    if (conflito) {
      return response.status(400).json({
        message: "Este quarto já está reservado para o período selecionado.",
      });
    }

    // Calcula o total de dias
    const dias = Math.ceil(
      (new Date(checkOutData) - new Date(checkInData)) / (1000 * 60 * 60 * 24)
    );
    if (dias <= 1) {
      return response.status(400).json({
        message: "O período selecionado deve ter ao menos 2 dia.",
      });
    }

    const precoTotal = quarto.precoPorNoite * dias;

    // Cria o Check-In
    const checkIn = await CheckIn.create({
      quartoId,
      checkInData,
      checkOutData,
      adultos,
      criancas,
      bebes,
      precoTotal,
      nome,
    });

    // Armazena a indisponibilidade
    await Disponibilidade.create({
      quartoId,
      dataInicio: checkInData,
      dataFim: checkOutData,
    });

    response.status(201).json({ message: "Check-in realizado com sucesso", checkIn });
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

export const getDatasIndisponiveis = async (request, response) => {
  const { quartoId } = request.params;

  try {
    const datasIndisponiveis = await Disponibilidade.findAll({
      where: { quartoId },
      attributes: ["dataInicio", "dataFim"],
    });

    const datas = datasIndisponiveis.map((indisponibilidade) => ({
      inicio: indisponibilidade.dataInicio,
      fim: indisponibilidade.dataFim,
    }));

    response.status(200).json({ datas });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};