import { Sequelize } from "sequelize";

const conn = new Sequelize("ypua_reserver", "root", "Sen@iDev77!.", {
  host: "localhost",
  dialect: "mysql",
});

export default conn
