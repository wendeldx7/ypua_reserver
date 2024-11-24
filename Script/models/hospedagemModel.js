import conn from "../config/conn.js";
import { DataTypes } from "sequelize";

const Quarto = conn.define(
  "quartos",
  {
    quartoId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    quarto: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
    capacidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precoPorNoite: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    situacao: {
      type: DataTypes.ENUM('disponível', 'reservado', 'em manutenção'),
      defaultValue: 'disponível',
    },
    facilidades: {
      type: DataTypes.JSON,
    },
  },
  {
    tableName: "quartos",
    timestamps: true,
  }
);

export default Quarto;
