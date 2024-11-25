import { Router } from "express";
import { getQuartos, createRoom, getQuartoPorId } from "../controllers/hospedagensController.js";

const router = Router();

router.get("/", getQuartos);
router.post("/", createRoom)
router.get('/:quartoId', getQuartoPorId);

export default router;
