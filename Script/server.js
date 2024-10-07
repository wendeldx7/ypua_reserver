import express from "express";
import cors from "cors";
import "dotenv/config";
import conn from "./config/conn.js";

import "./models/hospedagemModel.js";
import hospedagensRouter from "./routes/hospedagensRoutes.js";

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

const PORT = process.env.PORT || 3333;

app.get("/", (req, res) => {
  res.send("Olá, Mundo!");
});

app.use("/quartos", hospedagensRouter);

app.use((request, response) => {
  response.status(404).json({ message: "Rota nao encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
