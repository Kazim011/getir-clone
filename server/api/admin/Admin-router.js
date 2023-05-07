const router = require("express").Router();
const Siparis = require("../Siparis/Siparis-model");
const Cart = require("../Cart/Cart-model");
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
router.post("/deletetur", tokenVerify, async (req, res, next) => {
  try {
    console.log(req.body.tur_id);
    await Admin.turDelete(req.body.tur_id);
    return res.status(200).json({ message: "Tür silme başarılı" });
  } catch (error) {
    next(error);
  }
});
router.post("/odeme", tokenVerify, async (req, res, next) => {
  try {
    const { sepet } = req.body;
    console.log(sepet);
    const [siparis_id] = await Admin.addSiparis({ user_id: req.user.user_id });
    for (let i = 0; i < sepet.length; i++) {
      await Admin.addSiparisUrun({
        urun_adet: sepet[i].urun_adet,
        urun_id: sepet[i].urun_id,
        siparis_id,
      });
    }
    await Admin.siparisStatus({
      siparis_tarih: new Date().toString(),
      siparis_adres: "İstanbul",
      siparis_id,
    });
    await Cart.resetCart(req.user.user_id);
    return res.status(200).json({ message: "basarılır" });
  } catch (error) {
    next(error);
  }
});
router.get("/siparisler", tokenVerify, async (req, res, next) => {
  const data = await Admin.hazırlananSiparisler();
  for (let i = 0; i < data.length; i++) {
    data[i].toplam = await Siparis.toplam(data[i].siparis_id);
  }
  return res.status(200).json(data);
});
module.exports = router;
