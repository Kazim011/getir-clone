const db = require("../../data/db-config");

async function addUrun(data) {
  return await db("urunler").insert(data);
}
async function deleteUrun(data) {
  return await db("urunler").where(data).del();
}
async function updateUrun(id, data) {
  return await db("urunler").where("urun_id", id).update(data);
}

module.exports = {
  addUrun,
  deleteUrun,
  updateUrun,
};
