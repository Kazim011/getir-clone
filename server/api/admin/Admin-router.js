const router = require("express").Router();
const tokenVerify = require("../adminVerify");
const Admin = require("./admin-model");
router.get("/tumurun", tokenVerify, async (req, res, next) => {
  const data = await Admin.getAllKategori();
  return res.status(200).json(data);
});
router.get("/geturun/:id", tokenVerify, async (req, res, next) => {
  const data = await Admin.getUrunfromKategori(req.params.id);
  return res.status(200).json(data);
});

router.post("/gettur", tokenVerify, async (req, res, next) => {
  const data = await Admin.getTur(req.body.kategori_id);
  return res.status(200).json(data);
});
router.post("/addtur", tokenVerify, async (req, res, next) => {
  const data = await Admin.addTur(req.body);
  return res.status(200).json({ message: "Tür ekleme başarılı" });
});
module.exports = router
