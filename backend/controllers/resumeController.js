import Resume from "../models/Resume.js";

export const uploadResume = async (req, res) => {
  const { content } = req.body;
  const resume = new Resume({ userId: req.user.id, content });
  await resume.save();
  res.json({ message: "Resume uploaded" });
};

export const getResume = async (req, res) => {
  const resume = await Resume.findOne({ userId: req.user.id });
  res.json(resume);
};
