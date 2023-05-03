const Kategori = require("./Kategori-model");
const jwt = require("../adminVerify");
const router = require("express").Router();

router.get("/getkategori", async (req, res, next) => {
  try {
    const data = await Kategori.getKategori();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Server is error" });
  }
});
router.post("/getkategori/:id", async (req, res, next) => {
  const array = await Kategori.getTur(req.params.id);
  console.log(array);
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    const data = await Kategori.getFilterKategori({
      tur_id: array[i].tur_id,
      kategori_id: req.params.id,
    });
    console.log(data);
    obj[array[i].urun_tur] = data;
  }
  console.log(obj);
  return res.status(200).json(obj);
});
router.get("/kategorial/:id", async (req, res, next) => {
  const [kategori, tur] = await Promise.all([
    Kategori.getKategori(),
    Kategori.getTur(req.params.id),
  ]);
  return res.status(200).json({ kategori, tur, id: +req.params.id });
});
router.post("/addkategori", jwt, async (req, res, next) => {
  const data = await Kategori.addKategori(req.body);
  return res.status(200).json({ message: "Başarıyla eklendi" });
});

router.post("/deletekategori", jwt, async (req, res, next) => {
  const data = await Kategori.deleteKategori({
    kategori_id: req.body.kategori_id,
  });
  return res.status(200).json({ message: "kategori başarıyla silindi" });
});

router.post("/updatekategori", async (req, res, next) => {
  await Kategori.updateKategori(req.body.kategori_id, req.body);
  return res.status(200).json({ message: "kategori başarıyla güncellendi." });
});
module.exports = router;
