/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tur", (t) => {
    t.increments("tur_id");
    t.string("urun_tur").notNullable();
    t.integer("kategori_id")
      .notNullable()
      .references("kategori_id")
      .inTable("kategori")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
