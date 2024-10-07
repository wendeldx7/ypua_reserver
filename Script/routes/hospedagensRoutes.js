import { Router } from "express";
import { getQuartos } from "../controllers/hospedagensController.js";

const router = Router();

router.get("/", getQuartos);

export default router;
