import { Sequelize } from "sequelize";

const conn = new Sequelize("ypua_reserver", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

export default conn
