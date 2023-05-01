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
module.exports = router;
