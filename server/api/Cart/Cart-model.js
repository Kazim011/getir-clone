const db = require("../../data/db-config");

async function getFilterCart(data) {
  return await db("cart").where(data).first();
}
async function cartUpdate(id, data) {
  return await db("cart").where("cart_id", id).update(data);
}
async function getCartInstert(data) {
  return await db("cart").insert(data);
}
async function remoUruninCart(id) {
  return await db("cart").where("cart_id", id).del();
}
async function getUserCart(id) {
  return await db("cart as c")
    .leftJoin("urunler as u", "u.urun_id", "c.urun_id")
    .select("c.*", "u.*")
    .where("c.user_id", id);
}
async function toplam(id) {
 return await db.select(db.raw('SUM(urun_adet * urun_fiyat) as total'))
  .from('cart as c')
  .leftJoin('urunler as u', 'u.urun_id', 'c.urun_id')
  .where('c.user_id', 1).first()
}

module.exports = {
  getFilterCart,
  cartUpdate,
  getCartInstert,
  remoUruninCart,
  getUserCart,
  toplam,
};
