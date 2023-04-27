/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("kategori", (k) => {
      k.increments("kategori_id");
      k.string("kategori_adı").notNullable();
      k.string("kategori_resim").notNullable();
    })
    .createTable("urunler", (u) => {
      u.increments("urun_id");
      u.string("urun_adı").notNullable();
      u.string("urun_resim").notNullable();
      u.string("urun_birim").notNullable();
      u.double("urun_fiyat").notNullable();
      u.string("urun_tur").notNullable();
      u.integer("kategori_id")
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
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("urunler").dropTableIfExists("kategori");
};
