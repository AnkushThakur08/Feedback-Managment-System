require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

const port = 8000;

// CONNECTION
require("./config/connectionDB").connection();
require("./config/connectionDB").sync();
require("./models");

// Routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

// LISTEN
app.listen(port, (req, res) => {
  console.log(`App is listening on ${port}`);
});
