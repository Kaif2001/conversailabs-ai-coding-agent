const dns = require("dns");

// Force Google DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// Load environment variables
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const dbConfig = require("./config/database.config");

const app = express();

// Parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("✅ Successfully connected to MongoDB Atlas");
})
.catch((err) => {
    console.error("❌ Database Connection Error:");
    console.error(err);
    process.exit(1);
});

// Home Route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Easy Notes API"
    });
});

// Routes
require("./app/routes/note.routes")(app);

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});