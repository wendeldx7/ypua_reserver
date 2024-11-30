import { Router } from "express";
import { registerUser, loginUser, userInfo } from "../controllers/userController.js"

import verifyToken from "../middleware/verify-token.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser)
router.get('/user', verifyToken, userInfo)




export default router;
