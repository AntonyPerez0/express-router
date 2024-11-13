const express = require("express");
const app = express();

app.use(express.json());

const usersRouter = require("../routes/users");
app.use("/", usersRouter);

const fruitsRouter = require("../routes/fruits");
app.use("/", fruitsRouter);

module.exports = app;
