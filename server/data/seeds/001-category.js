/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("urunler").truncate();
  await knex("kategori").truncate();

  await knex("kategori").insert([
    {
      kategori_adı: "Su & İçecek",
      kategori_resim:
        "https://market-product-images-cdn.getirapi.com/category/5309b06e-89a6-4bee-9232-243d6bc4870f.jpeg",
    },
    {
      kategori_adı: "Meyve & Sebze",
      kategori_resim:
        "https://market-product-images-cdn.getirapi.com/category/ec6b45ae-fc6f-4928-9dcb-9f9af458fc33.jpeg",
    },
    {
      kategori_adı: "Temel Gıda",
      kategori_resim:
        "https://market-product-images-cdn.getirapi.com/category/61c0bc21-f9c2-4a1a-ac9a-cbe168a3dc5d.jpeg",
    },
    {
      kategori_adı: "Atıştırmalık",
      kategori_resim:
        "https://market-product-images-cdn.getirapi.com/category/8f03636f-9bd2-4769-8427-279915e4c33f.jpeg",
    },
    {
      kategori_adı: "Dondurma",
      kategori_resim:
        "https://market-product-images-cdn.getirapi.com/category/8d9316c4-8810-470b-af14-490047854534.jpeg",
    },
    {
      kategori_adı: "Süt ürünleri",
      kategori_resim:
        "https://market-product-images-cdn.getirapi.com/category/00291222-f892-40f7-ae73-805d0fcff0ec.jpeg",
    },
    {
      kategori_adı: "Kahvaltılık",
      kategori_resim:
        "https://market-product-images-cdn.getirapi.com/category/8b3ca6ef-879c-44e9-885b-9bdf1a7c2d03.jpeg",
    },
    {
      kategori_adı: "Yiyecek",
      kategori_resim:
        "https://market-product-images-cdn.getirapi.com/category/da88cf5c-badb-4114-ac60-d2eab214fcc5.jpeg",
    },
  ]);
  await knex("urunler").insert([
    {
      urun_adı: "Elma",
      urun_birim: "750 gr",
      urun_fiyat: "14.99",
      urun_tur: "meyve",
      urun_resim:
        "http://cdn.getir.com/product/5f460b49cde7d32ab1ef4b85_tr_1631085438698.jpeg",
      kategori_id: 2,
    },
    {
      urun_adı: "Yerli Muz",
      urun_birim: "750 gr",
      urun_fiyat: "30.99",
      urun_tur: "meyve",
      urun_resim:
        "http://cdn.getir.com/product/5f3bbfda27b154538cb46104_tr_1598884458095.jpeg",
      kategori_id: 2,
    },
    {
      urun_adı: "Portakal",
      urun_birim: "1 Kg",
      urun_fiyat: "22.99",
      urun_tur: "meyve",
      urun_resim:
        "https://market-product-images-cdn.getirapi.com/product/22af76ed-4203-4a76-a22b-ca1cd3237745.jpeg",
      kategori_id: 2,
    },
    {
      urun_adı: "Domates",
      urun_birim: "1 Kg",
      urun_fiyat: "22.99",
      urun_tur: "sebze",
      urun_resim:
        "http://cdn.getir.com/product/5bbdfac1065e060011b9ca28_tr_1594026825828.jpeg",
      kategori_id: 2,
    },
    {
      urun_adı: "Lime",
      urun_birim: "3 Adet",
      urun_fiyat: "39.99",
      urun_tur: "sebze",
      urun_resim:
        "http://cdn.getir.com/product/5ce6581cfd9b330001c4a889_tr_1585206960423.jpeg",
      kategori_id: 2,
    },
  ]);
};
