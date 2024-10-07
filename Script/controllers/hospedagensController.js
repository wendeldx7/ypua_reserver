import Quarto from "../models/hospedagemModel.js"


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
  

