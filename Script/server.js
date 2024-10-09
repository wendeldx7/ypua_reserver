import express from "express";
import cors from "cors";
import "dotenv/config";
import conn from "./config/conn.js";

import "./models/hospedagemModel.js";
import "./models/checkInModel.js";

import hospedagensRouter from "./routes/hospedagensRoutes.js";
import CheckInRouter from "./routes/checkInRoutes.js";

const PORT = process.env.PORT || 3333;
const app = express();

//*cors
app.use(
  cors({
    origin: process.env.CORS_ALLOWED_ORIGINS || "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Olá, Mundo!");
});

conn
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor on PORT: ${PORT}`);
    });
  })
  .catch((error) => console.error(error));

app.use("/quartos", hospedagensRouter);
app.use("/check", CheckInRouter);

app.use((request, response) => {
  response.status(404).json({ message: "Rota nao encontrada" });
});
