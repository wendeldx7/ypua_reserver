import Usuario from "../models/userModel.js";
import bcrypt from 'bcrypt';

//* Helpers
import createUserToken from "../helper/create-user-token.js";
import getToken from "../helper/get-token.js";
import getUserByToken from "../helper/get-user-by-token.js";



export const registerUser = async (req, res) => {
  const { nome, nomeExibicao, email, senha, cpf, telefone, cargo, genero, endereco, dataNascimento } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({ where: { email } }); //! vai verificar se o email já existe no banco de dados
    if (usuarioExistente) {
      return res.status(400).json({ error: "E-mail já cadastrado" });
    }

    const senhaCrypt = await bcrypt.hash(senha, 10); //! senha criptografada / boas práticas de segurança

    const novoUsuario = {
      nome,
      nomeExibicao,
      email,
      senha: senhaCrypt,
      cpf,
      telefone,
      cargo,
      genero,
      endereco,
      dataNascimento,
    };

    await Usuario.create(novoUsuario);
    res.status(201).json({ message: "Usuário cadastrado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao cadastrar usuário" });
  }
};



export const loginUser = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ error: "E-mail não encontrado" });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ error: "Senha incorreta" });
    }
    createUserToken(usuario, req, res);
    // res.status(200).json({ message: "Login realizado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao fazer login" });
  }
};


export const userInfo = async (req, res) => {
    try {
      const token = getToken(req);
      const usuario = await getUserByToken(token);
      res.status(200).json(usuario);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

  
