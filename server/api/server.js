const express = require("express");
const app = express();
const kategori = require("./Kategori/Kategori-router");
const urun = require("./Urun/Urun-Router");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/kategori", kategori);
app.use("/urun", urun);

module.exports = app;
