const db = require("../../data/db-config");

async function addUrun(data) {
  return await db("urunler").insert(data);
}

module.exports = {
  addUrun,
};
