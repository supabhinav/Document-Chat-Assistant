require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const chatRoutes = require("./routes/chatRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder for uploaded PDFs
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});