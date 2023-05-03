const db = require("../../data/db-config");

async function getKategori() {
  return await db("kategori");
}
async function getFilterKategori(data) {
  return await db("urunler").where(data);
}
async function getTur(data) {
  return await db("tur").where("kategori_id", data);
}
async function addKategori(data) {
  return await db("kategori").insert(data);
}
async function deleteKategori(data) {
  return await db("kategori").where(data).del();
}

async function updateKategori(id, data) {
  return await db("kategori").where("kategori_id", id).update(data);
}
module.exports = {
  getKategori,
  getFilterKategori,
  getTur,
  addKategori,
  deleteKategori,
  updateKategori,
};
