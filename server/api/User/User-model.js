const db = require("../../data/db-config");

async function getFilterUser(data) {
  return await db("user").where(data).first();
}
async function addUser(data) {
  return await db("user").insert(data);
}

module.exports = { getFilterUser, addUser };
