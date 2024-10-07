import { Router } from "express";
import { getQuartos, createRoom } from "../controllers/hospedagensController.js";

const router = Router();

router.get("/", getQuartos);
router.post("/", createRoom)

export default router;
