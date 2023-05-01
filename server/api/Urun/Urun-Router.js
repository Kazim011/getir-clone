const router = require("express").Router();
const urun = require("./Urun-Model");

router.post("/addurun", async (req, res, next) => {
  const data = await urun.addUrun(req.body);
  res.status(200).json({ message: "Ürün başarıyla eklendi." });
});

module.exports = router;
