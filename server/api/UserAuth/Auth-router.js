const router = require("express").Router();
const User = require("../User/User-model");
const mw = require("./Auth-mw");
const token = require("../secrets/utils");
const bcyrpt = require("bcrypt");

router.post(
  "/register",
  mw.paramsCheck,
  mw.RegisterPhoneCheck,
  async (req, res, next) => {
    try {
      await User.addUser(req.body);
      return res.status(201).json({ message: "Kayıt Oluşturuldu !" });
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
  mw.paramsCheck,
  mw.LoginPhoneCheck,
  async (req, res, next) => {
    try {
      const jwt = token.generateToken({ user_id: req.user.user_id }, "1d");
      return res.status(200).json({ token: jwt });
    } catch (error) {
      next({ status: 500, message: "Hata" });
    }
  }
);

module.exports = router;
