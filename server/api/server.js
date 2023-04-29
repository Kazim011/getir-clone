const express = require("express");
const app = express();
const kategori = require("./Kategori/Kategori-router");
const urun = require("./Urun/Urun-Router");
const AdminAuth = require("./AdminAuth/auth-router");
const UserAuth = require("./UserAuth/Auth-router");
const User = require("./User/User-router");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/kategori", kategori);
app.use("/urun", urun);
app.use("/auth", AdminAuth);
app.use("/userAuth", UserAuth);
app.use("/user", User);
app.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = app;
