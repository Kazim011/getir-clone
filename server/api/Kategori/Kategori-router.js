const Kategori = require("./Kategori-model");

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
module.exports = router;
