/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("cart", (c) => {
    c.increments("cart_id");
    c.integer("urun_adet").notNullable();
    c.integer("urun_id")
      .notNullable()
      .references("urun_id")
      .inTable("urunler")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    c.integer("user_id")
      .notNullable()
      .references("user_id")
      .inTable("user")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cart");
};
