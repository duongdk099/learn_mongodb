const express = require("express");
const connectDB = require('./app/models/index.js');
const router = require('./app/routes/index.js');

const app = express();
app.use(express.json()); // middle ware for parsing json
app.use("/api", router);

module.exports = app;