import conn from "../config/conn.js";
import { DataTypes } from "sequelize";
import Quarto from "./hospedagemModel.js"

const Disponibilidade = conn.define("Disponibilidade", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quartoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Quarto,
      key: "quartoId",
    },
  },
  dataInicio: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  dataFim: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
}, {
  tableName: "disponibilidades",
  timestamps: false,
});

// Relacionamento com Quarto
Quarto.hasMany(Disponibilidade, { foreignKey: "quartoId" });
Disponibilidade.belongsTo(Quarto, { foreignKey: "quartoId" });

export default Disponibilidade;
