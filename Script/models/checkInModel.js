import Quarto from "./hospedagemModel.js";
import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const CheckIn = conn.define(
  "Checkin",
  {
    checkId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    checkInData: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    checkOutData: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    adultos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        min: {
          args: 1,
          message: "É necessário pelo menos 1 adulto para realização do check-in.",
        },
      },
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
    precoTotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    nome: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  },
  {
    tableName: "checkin",
    timestamps: true,
  }
);

Quarto.hasMany(CheckIn, {
  foreignKey: "quartoId", 
});
CheckIn.belongsTo(Quarto, {
  foreignKey: "quartoId", 
});

export default CheckIn;
