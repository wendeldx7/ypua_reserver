import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const Usuario = conn.define(
  "usuarios",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nomeExibicao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^[0-9]{11}$/i, // Validação de CPF
      },
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: /^[0-9]{10,11}$/i, // Validação de telefone
      },
    },
    cargo: {
      type: DataTypes.ENUM("funcionario", "adm"),
      allowNull: false,
    },
    genero: {
      type: DataTypes.ENUM("masculino", "feminino", "outro"),
      allowNull: true,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dataNascimento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  { tableName: "usuarios" }
);

export default Usuario;


