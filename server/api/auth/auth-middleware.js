const AdminModel = require("../admin/admin-model");

const payloadCheck = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "email veya şifre gerekli" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const dataBaseEmailRegisterCheck = async (req, res, next) => {
  try {
    const email = await AdminModel.getByFilter({ email: req.body.email });
    if (email) {
      return res.status(400).json({ message: "Böyle bir kullanıcı vardır!" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const dataEmailLoginCheck = async (req, res, next) => {
  try {
    const email = await AdminModel.getByFilter({ email: req.body.email });
    if (email) {
      req.admin = email;
      next();
    } else {
      return res.status(401).json({ message: "Kullanıcı Bulunamadı!!" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  payloadCheck,
  dataBaseEmailRegisterCheck,
  dataEmailLoginCheck,
};
