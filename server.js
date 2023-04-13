const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Challenge = require("./models/Challenge");

const app = express();
const port = process.env.PORT || 3000;

// Configure CORS
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

// Connect to MongoDB Atlas
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Atlas database connection established successfully");
});

// API endpoints
app.get("/api/challenges", async (req, res) => {
  const challenges = await Challenge.find();
  res.json(challenges);
});

app.post("/api/challenges", async (req, res) => {
  const { title, description, imageUrl, category } = req.body;
  const challenge = new Challenge({
    title,
    description,
    imageUrl,
    category,
  });
  await challenge.save();
  res.json(challenge);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
