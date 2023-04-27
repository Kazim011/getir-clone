/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("admin").truncate();
  await knex("admin").insert([
    { email: "baris@gmail.com", password: "1234" },
    { email: "sirzatnergiz@gmail.com", password: "1234" },
    { email: "kazimnergiz123@gmail.com", password: "1234" },
  ]);
};
