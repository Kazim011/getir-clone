/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("siparis", (s) => {
      s.increments("siparis_id");
      s.integer("user_id")
        .notNullable()
        .references("user_id")
        .inTable("user")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("siparis_status", (s) => {
      s.increments("status_id");
      s.date("siparis_tarih").notNullable();
      s.string("siparis_adres").notNullable();
      s.string("siparis_durum").defaultTo("hazırlanıyor");
      s.integer("siparis_id")
        .notNullable()
        .references("siparis_id")
        .inTable("siparis")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("siparis_urun", (s) => {
      s.increments("siparis_urun");
      s.integer("urun_adet").notNullable();
      s.integer("urun_id")
        .notNullable()
        .references("urun_id")
        .inTable("urunler")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      s.integer("siparis_id")
        .notNullable()
        .references("siparis_id")
        .inTable("siparis")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("siparis_urun")
    .dropTableIfExists("siparis_status")
    .dropTableIfExists("siparis");
};
