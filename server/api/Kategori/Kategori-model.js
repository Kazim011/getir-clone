const db = require("../../data/db-config");

async function getKategori() {
  return await db("kategori");
}
async function getFilterKategori(data) {
  return await db("urunler").where(data);
}
async function getTur(data) {
  return await db("tur  ").where("kategori_id", data);
}
module.exports = {
  getKategori,
  getFilterKategori,
  getTur,
};
