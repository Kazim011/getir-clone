/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  //              passwordlar 1234

  await knex("admin").truncate();
  await knex("admin").insert([
    {
      email: "baris@gmail.com",
      password: "$2a$12$3H9UKvMXcUkA5w39TSE6X.kc8F956ThRi0O.RMn0zsZ9M4SI3z0sS",
      admin_role: "admin",
    },
    {
      email: "sirzat@gmail.com",
      password: "$2a$12$3H9UKvMXcUkA5w39TSE6X.kc8F956ThRi0O.RMn0zsZ9M4SI3z0sS",
      admin_role: "analist",
    },
    {
      email: "kazim@gmail.com",
      password: "$2a$12$3H9UKvMXcUkA5w39TSE6X.kc8F956ThRi0O.RMn0zsZ9M4SI3z0sS",
      admin_role: "analist",
    },
  ]);
};
