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

async function getAllKategori(params) {
  return await db("kategori");
}
async function getUrunfromKategori(id) {
  return await db("urunler").where("kategori_id", id);
}
module.exports = {
  getAll,
  getById,
  getByFilter,
  create,
  getAllKategori,
  getUrunfromKategori,
};
