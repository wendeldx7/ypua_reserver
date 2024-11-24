import jwt from "jsonwebtoken";

const createUserToken = (usuario, req, res) => {
  const token = jwt.sign(
    {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    },
    "SECRETKEYYPUA",
    {
      expiresIn: "12h",
    }
  );

  res.status(200).json({
    message: "Você está autenticado!",
    token: token,
    usuarioId: usuario.id,
  });
};

export default createUserToken;