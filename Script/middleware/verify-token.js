import jwt from "jsonwebtoken";
import getToken from "../helper/get-token.js";

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ msg: "Acesso negado! Cabeçalho de autorização não foi encontrado." });
  }

  const token = getToken(req);
  if (!token) {
    return res
    .status(401)
    .json({ msg: "Acesso negado! Token não fornecido ou inválido." });;
  }

  try {
    const verified = jwt.verify(token, 'SECRETKEYYPUA')
    req.usuario = verified.id
    next()
  } catch (error) {
    console.log(error)
    res.status(400).json({ msg: "Token Inválido." });
  }
};

export default verifyToken;