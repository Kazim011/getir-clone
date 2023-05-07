const router = require("express").Router();
const verify = require("../adminVerify");
const Siparis = require("./Siparis-model");

router.post("/detay", verify, async (req, res, next) => {
  try {
    const data = await Siparis.idyeGoreSiparis(req.body.id);
    console.log(data);
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});
router.post("/onay", verify, async (req, res, next) => {
  try {
    await Siparis.siparisOnay(req.body.id, { siparis_durum: "yola cıktı" });
    return res.status(200).json({ message: "Başarılı" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
