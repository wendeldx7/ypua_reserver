import { Router } from "express";
import { createCheckIn, deleteCheckIn, getAllCheckIn, getCheckIn, updateCheckIn } from "../controllers/checkInController.js"

const router = Router();

router.post("/:quartoId", createCheckIn);
router.get("/", getAllCheckIn);
router.get("/:id", getCheckIn);
router.put("/checkin/:id", updateCheckIn);
router.put("/checkin/:id", deleteCheckIn);


export default router;
