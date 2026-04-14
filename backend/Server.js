const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// Import routes
const userRoutes = require("./routes/user");

// Use routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});