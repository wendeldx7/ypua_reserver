import { Router } from "express";
import { createCheckIn } from "../controllers/checkInController.js"

const router = Router();

router.post("/:quartoId", createCheckIn);

export default router;
