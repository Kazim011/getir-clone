const router = require("express").Router();
const AdminModel = require("../admin/admin-model");
const bcrypt = require("bcryptjs");
const mw = require("./auth-middleware");
const utils = require("../secrets/utils");

router.post(
  "/register",
  mw.payloadCheck,
  mw.dataBaseEmailRegisterCheck,
  async (req, res, next) => {
    try {
      const hash = await bcrypt.hash(req.body.password, 12);

      const newAdmin = {
        email: req.body.email,
        password: hash,
      };
      const insertAdmin = await AdminModel.create(newAdmin);
      return res.status(201).json(insertAdmin);
    } catch (error) {
      next({
        status: 500,
        message: "Hata Oluştu!!",
      });
    }
  }
);

router.post(
  "/login",
  mw.payloadCheck,
  mw.dataEmailLoginCheck,
  async (req, res, next) => {
    const check = await bcrypt.compare(req.body.password, req.admin.password);

    if (check) {
      let token = utils.generateToken({ admin_id: req.admin.admin_id }, "1d");
      res.status(200).json({
        message: `Hoşgeldin ${req.body.email}`,
        token,
      });
    } else {
      return res
        .status(401)
        .json({ message: "Kullanıcı adı veya Şifre hatalı!!" });
    }
  }
);

module.exports = router;
