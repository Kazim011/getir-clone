const router = require("express").Router();
const Cart = require("./Cart-model");
const Userjwt = require("../userVerify");

router.post("/addcart", Userjwt, async (req, res, next) => {
  const data = await Cart.getFilterCart({
    user_id: req.user.user_id,
    urun_id: req.body.urun_id,
  });
  if (data) {
    await Cart.cartUpdate(data.cart_id, {
      urun_adet: data.urun_adet + 1,
    });
  } else {
    await Cart.getCartInstert({
      urun_adet: 1,
      user_id: req.user.user_id,
      urun_id: req.body.urun_id,
    });
  }
  return res.status(200).json({ message: "Urun eklendi" });
});
router.post("/removecart", Userjwt, async (req, res, next) => {
  const data = await Cart.getFilterCart({
    user_id: req.user.user_id,
    urun_id: req.body.urun_id,
  });
  if (data.urun_adet == 1) {
    await Cart.remoUruninCart(data.cart_id);
  } else {
    await Cart.cartUpdate(data.cart_id, { urun_adet: data.urun_adet - 1 });
  }
  return res.status(200).json({ message: "Carttan ürün silme başarılı" });
});
router.get("/getcart", Userjwt, async (req, res, next) => {
  const data = await Cart.getUserCart(req.user.user_id);
  
  const { total } = await Cart.toplam(req.user.user_id);
  return res.status(200).json({ data, total });
});
router.get("/resetcart", Userjwt, async (req, res, next) => {
  await Cart.resetCart(req.user.user_id);
  return res.status(200).json({ message: "Sepet Listesi resetlendi" });
});

module.exports = router;
