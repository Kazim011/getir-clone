const router = require("express").Router();
const adminVerify = require("../adminVerify");
const urun = require("./Urun-Model");

router.post("/addurun", adminVerify, async (req, res, next) => {
  const data = await urun.addUrun(req.body);
  res.status(200).json({ message: "Ürün başarıyla eklendi." });
});
router.post("/delurun", adminVerify, async (req, res, next) => {
  const data = await urun.deleteUrun({ urun_id: req.body.urun_id });
  return res.status(200).json({ message: "Ürün Başarıyla silindi" });
});
router.post("/updateurun", adminVerify, async (req, res, next) => {
  await urun.updateUrun(req.body.id, req.body.urun);
  return res.status(200).json({ message: "Update basarılı" });
});
module.exports = router;
