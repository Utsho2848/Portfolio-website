const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = require("./middleware/auth"); 

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

//  Schema & Model
const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});
const Message = mongoose.model("Message", MessageSchema);

// Default route
app.get("/", (req, res) => {
  res.send("Backend server is running 🚀");
});

// Public route (POST → anyone can send message)
app.post("/api/messages", async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.json({ message: "Message saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving message" });
  }
});

//  Login route (generate JWT token)
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Hardcoded admin credentials (better: use DB)
  if (username ===  process.env.USER_NAME && password === process.env.USER_PASSWORD) {
    const token = jwt.sign({ id: username }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

//  Protected route (GET --> only with valid token)
app.get("/api/messages", verifyToken, async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages" });
  }
});

//  Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));