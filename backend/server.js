import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import resumeRoutes from './routes/resumeRoutes.js';
import chatRoutes from './routes/chatRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// DB connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
console.log("Your API Key:", process.env.OPENAI_API_KEY);