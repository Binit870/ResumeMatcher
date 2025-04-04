// controllers/chatController.js

import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();
console.log("Loaded OPENAI key in chatController:", process.env.OPENAI_API_KEY);
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "gpt-3.5-turbo",
    });

    res.status(200).json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("AI Chat Error:", error.message);
    res.status(500).json({ error: "Failed to get AI response." });
  }
};
