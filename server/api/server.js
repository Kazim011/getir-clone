const express = require("express");
const app = express();
const kategori = require("./Kategori/Kategori-router");
const cors = require("cors");


app.use(express.json());
app.use(cors());

app.use("/kategori",kategori);

module.exports = app;
