import express from "express";
import { chatWithAI } from "../controllers/chatController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/match", auth, chatWithAI);

export default router;
