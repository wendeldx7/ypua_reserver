import { DataTypes } from "sequelize";
import conn from "../config/conn.js"

const Usuario = conn.define(
  "usuarios",
  {
    nome: {
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
  },
  { tableName: "usuarios" }
);

export default Usuario;