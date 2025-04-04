import express from "express";
import { uploadResume, getResume } from "../controllers/resumeController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/upload", auth, uploadResume);
router.get("/get", auth, getResume);

export default router;
