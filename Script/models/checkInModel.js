import conn from "../config/conn.js";
import { DataTypes } from "sequelize";

const CheckIn = conn.define(
  "CheckIn",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    checkInData: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    checkOutData: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    adultos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        min: {
          args: 1,
          message: "É necessário pelo menos 1 adulto para realização do check-in."
        }
      }
    },
    criancas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    bebes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "quartos",
    timestamps: true,
  }
);

export default Quarto;
