import CheckIn from "../models/checkInModel.js";
import Quarto from "../models/hospedagemModel.js";
import { Op, fn, col, literal } from "sequelize";
export const createCheckIn = async (request, response) => {
  const { quartoId } = request.params;
  const { checkInData, checkOutData, adultos, criancas, bebes, nome } = request.body;

  const dataEntrada = new Date(checkInData);
  const dataSaida = new Date(checkOutData);

  if (dataEntrada >= dataSaida) {
    return response.status(400).json({
      message: "A data de entrada não pode ser depois/maior que a data de saída.",
    });
  }
  const dataSaidaModificada = new Date(dataSaida);
  dataSaidaModificada.setDate(dataSaidaModificada.getDate() - 1);

  console.log(dataSaidaModificada)
  const milisegundos = dataSaida.getTime() - dataEntrada.getTime();
  const dias = milisegundos / (1000 * 60 * 60 * 24);

  if (dias <= 0) {
    return response.status(400).json({
      message: "A quantidade de dias precisa ser maior que zero.",
    });
  }

  try {
    const quarto = await Quarto.findByPk(quartoId);
    if (!quarto) {
      return response.status(404).json({ message: "Quarto não encontrado" });
    }

    if (quarto.situacao === "reservado" || quarto.situacao === "em manutenção") {
      return response.status(400).json({
        message: "O quarto está indisponível para reserva.",
      });
    }
    const checkInExistente = await CheckIn.findOne({
      where: {
        quartoId,
        [Op.or]: [
         
          {
            checkInData: {
              [Op.lte]: dataSaida,  
            },
            checkOutData: {
              [Op.gte]: dataEntrada,
            },
          },
        ],
      },
    });

    if (checkInExistente) {
      return response.status(400).json({
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
    });

    const checkinComNomeQuarto = await CheckIn.findByPk(newCheckin.checkId, {
      include: [
        {
          model: Quarto,
          attributes: ["quarto"], 
        },
      ],
    });

    return response.status(201).json(checkinComNomeQuarto);

  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Erro ao processar a reserva." });
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
          attributes: ["quarto"], 
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
export const getAnnualRevenueWithGuests = async (request, response) => {
  const { year } = request.query;

  try {
    if (!year || isNaN(year) || year.length !== 4) {
      return response.status(400).json({
        message: "Por favor, forneça o ano no formato AAAA.",
      });
    }

    const start = new Date(`${year}-01-01`);
    const end = new Date(`${year}-12-31`);

    const faturamentoAnualComHospedes = await CheckIn.findAll({
      attributes: [
        [fn("DATE_FORMAT", col("checkInData"), "%Y-%m"), "mes"],
        [fn("SUM", col("precoTotal")), "faturamentoMensal"],
        [fn("SUM", col("bebes")), "totalBebes"],
        [fn("SUM", col("criancas")), "totalCriancas"],
        [fn("SUM", col("adultos")), "totalAdultos"],
      ],
      where: {
        checkInData: {
          [Op.between]: [start, end],
        },
      },
      group: [literal("mes")],
      order: [[literal("mes"), "ASC"]],
    });

    // Buscar todos os quartos para incluir na resposta
    const quartos = await Quarto.findAll({
      attributes: ["quartoId", "quarto"], // Apenas ID e nome do quarto
    });

    // Se não houver dados de faturamento para o ano fornecido
    if (!faturamentoAnualComHospedes.length) {
      return response
        .status(404)
        .json({ message: "Nenhum dado encontrado para o ano fornecido." });
    }

    // Inclui o array de quartos no retorno
    response.status(200).json({
      faturamentoAnualComHospedes,
      quartos: quartos.map((quarto) => ({
        id: quarto.quartoId,
        nome: quarto.quarto,
      })),
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
};

