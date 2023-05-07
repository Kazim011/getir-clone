const db = require("../../data/db-config");

function getAll() {
  return db("admin");
}

function getById(id) {
  return db("admin").where({ admin_id: id }).first();
}

function getByFilter(filter) {
  return db("admin").where(filter).first();
}

async function create(payload) {
  const [id] = await db("admin").insert(payload);
  return await getById(id);
}

async function getTur(data) {
  return await db("tur").where("kategori_id", data);
}

async function getAllKategori(params) {
  return await db("kategori");
}
async function getUrunfromKategori(id) {
  return await db("urunler").where("kategori_id", id);
}
async function addTur(data) {
  return await db("tur").insert(data);
}
async function turDelete(id) {
  return await db("tur").where("tur_id", id).del();
}
async function addSiparisUrun(data) {
  return await db("siparis_urun").insert(data);
}
async function addSiparis(data) {
  return await db("siparis").insert(data);
}
async function siparisStatus(data) {
  return await db("siparis_status").insert(data);
}
async function hazırlananSiparisler(params) {
 return await db("siparis as s")
    .leftJoin("siparis_status as ss", "ss.siparis_id", "s.siparis_id")
    .leftJoin("user as u", "u.user_id", "s.user_id")
    .where("ss.siparis_durum","hazırlanıyor")
    .groupBy("s.siparis_id")
    .orderBy("ss.siparis_tarih")
    .select("u.user_name", "ss.siparis_tarih");
}
module.exports = {
  getAll,
  siparisStatus,
  getById,
  getByFilter,
  create,
  hazırlananSiparisler,
  getAllKategori,
  getUrunfromKategori,
  getTur,
  addTur,
  turDelete,
  addSiparisUrun,
  addSiparis,
};
