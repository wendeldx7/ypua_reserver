import jwt from "jsonwebtoken";
import Usuario from "../models/userModel.js";
import { literal } from "sequelize";


const getUserByToken = async (token) => {
  return new Promise(async (resolve, reject) => {
    if (!token) {
      return res.status(401).json({ message: "Acesso negado" });
    }

    const decoded = jwt.verify(token, "SECRETKEYYPUA");
    const usuarioId = decoded.id;

    try {
      const usuario = await Usuario.findOne({
        raw: true,
        where: {
          id: usuarioId,
        },
        attributes: [
          'id',
          'nome',
        ]
      });
        console.log(usuario);
      if (!usuario) {
        reject({ status: 404, message: "Usuário não encontrado" });
      }
      resolve(usuario);
    } catch (error) {
      console.log(error);
      reject({ status: 500, message: "Erro ao buscar usuário" });
    }
  });
};

export default getUserByToken;