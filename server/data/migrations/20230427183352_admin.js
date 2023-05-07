/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("admin", (tbl) => {
    tbl.increments("admin_id");
    tbl.string("email").notNullable().unique();
    tbl.string("password").notNullable();
    tbl.string("admin_role").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("admin");
};
