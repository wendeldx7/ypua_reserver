import Quarto from "../models/hospedagemModel.js";

export const getQuartos = async (request, response) => {
  const page = parseInt(request.query.page) || 1;
  const limit = parseInt(request.query.limit) || 10;
  const offset = (page - 1) * 10;
  try {
    const quartos = await Quarto.findAndCountAll({
      limit,
      offset,
    });
    const totalPaginas = Math.ceil(quartos.count / limit);
    response.status(200).json({
      totalquartos: quartos.count,
      totalPaginas,
      paginaAtual: page,
      itemsPorPagina: limit,
      proximaPagina:
        totalPaginas === 0
          ? null
          : `http://localhost:3333/quartos?page=${page + 1}`,
      quartos: quartos.rows,
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "erro ao buscar quartos" });
  }
};

export const createRoom = async (request, response) => {
  const {
    quarto,
    tipo,
    descricao,
    capacidade,
    precoPorNoite,
    situacao,
    facilidades,
    caminhoImagem
  } = request.body;

  const newRoom = {
    quarto,
    tipo,
    descricao,
    capacidade,
    precoPorNoite,
    situacao,
    facilidades,
    caminhoImagem
  };
  try {
    await Quarto.create(newRoom);
    response.status(201).json({ message: "Quarto criado com sucesso" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Erro ao criar o quarto" });
  }
};

export const getQuartoPorId = async (request, response) => {
  const { quartoId } = request.params;

  try {
    const quarto = await Quarto.findByPk(quartoId);

    if (!quarto) {
      return response.status(404).json({ message: "Quarto não encontrado" });
    }

    response.status(200).json(quarto);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Erro ao buscar o quarto" });
  }
};