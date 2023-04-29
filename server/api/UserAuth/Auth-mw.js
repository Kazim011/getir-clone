const User = require("../User/User-model");
async function paramsCheck(req, res, next) {
  const { user_name, user_email, user_telefon } = req.body;
  if (!user_email || !user_name || !user_telefon) {
    return res.status(400).json({ message: "Lütfen boş alan bırakmayınız!" });
  } else {
    next();
  }
}

async function RegisterPhoneCheck(req, res, next) {
  const user = await User.getFilterUser({
    user_telefon: req.body.user_telefon,
  });
  if (user) {
    return res.status(400).json({
      message: "Bir hata ile karşılaştık. Lütfen daha sonra tekrar deneyin.",
    });
  } else {
    next();
  }
}
async function LoginPhoneCheck(req, res, next) {
  const user = await User.getFilterUser({
    user_telefon: req.body.user_telefon,
  });
  if (user) {
    req.user = user;
    next();
  } else {
    return res
      .status(400)
      .json({ message: "Bu telefona ait kullanıcı bulunmamaktadır !" });
  }
}
module.exports = { paramsCheck, RegisterPhoneCheck, LoginPhoneCheck };
