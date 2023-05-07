const db = require("../../data/db-config");

async function toplam(id) {
  return await db
    .select(db.raw("SUM(urun_adet * urun_fiyat) as total"))
    .from("siparis_urun as c")
    .leftJoin("urunler as u", "u.urun_id", "c.urun_id")
    .where("c.siparis_id", id)
    .first();
}
async function idyeGoreSiparis(id) {
  return await db("siparis_urun as s")
    .leftJoin("urunler as u ", "u.urun_id", "s.urun_id")
    .where("s.siparis_id", id);
}
async function siparisOnay(id, data) {
  return await db("siparis_status").where("siparis_id", id).update(data);
}

module.exports = { toplam, idyeGoreSiparis, siparisOnay };
