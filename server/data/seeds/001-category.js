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
      kategori_adı: "Fırından",
      kategori_resim:
        "https://market-product-images-cdn.getirapi.com/category/47dd2418-2493-47cb-a8c4-4ea55ff035b2.jpeg",
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
    {
      kategori_adı: "Fit & Form",
      kategori_resim:
        "https://market-product-images-cdn.getirapi.com/category/b6a1cabf-a848-46f1-9a8a-862dba8657c2.jpeg",
    },
    {
      kategori_adı: "Kişisel Bakım",
      kategori_resim:
        "https://market-product-images-cdn.getirapi.com/category/6a82d3cd-7e98-490c-948b-98a74929af8c.jpeg",
    },
    {
      kategori_adı: "Ev Bakım",
      kategori_resim:
        "https://market-product-images-cdn.getirapi.com/category/6c63f668-cec4-48a4-bd57-66c87dc0df93.jpeg",
    },
    {
      kategori_adı: "Ev & Yaşam",
      kategori_resim:
        "https://market-product-images-cdn.getirapi.com/category/cbbc82b3-dfef-43e8-a1a0-778002cc77ff.jpeg",
    },
    {
      kategori_adı: "Teknoloji",
      kategori_resim:
        "https://market-product-images-cdn.getirapi.com/category/71f10e45-7d0e-4484-b8d1-1b1e2dd1ec22.jpeg",
    },
    {
      kategori_adı: "Evcil Hayvan",
      kategori_resim:
        "https://market-product-images-cdn.getirapi.com/category/2c53a233-5a7d-405b-9cb5-e0ae64b59fb4.jpeg",
    },
    {
      kategori_adı: "Bebek",
      kategori_resim:
        "https://market-product-images-cdn.getirapi.com/category/711050f1-d642-4c03-967c-7a26d1d2357d.jpeg",
    },
    {
      kategori_adı: "Cinsel Sağlık",
      kategori_resim:
        "https://market-product-images-cdn.getirapi.com/category/cbb7ca4c-f1df-42d7-85be-997555f556e8.jpeg",
    },
  ]);
  await knex("urunler").insert([
    {
      urun_adı: "Kuzeyden",
      urun_birim: "12 x 336 ml",
      urun_fiyat: "46.95",
      urun_tur: "su",
      urun_resim:
        "https://market-product-images-cdn.getirapi.com/product/ed6e9d66-cfdc-41ca-b8b5-4edbea360e99.jpg",
      kategori_id: 1,
    },
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
      urun_adı: "Ananas",
      urun_birim: "1 Adet",
      urun_fiyat: "49.99",
      urun_tur: "meyve",
      urun_resim:
        "https://cdn.getir.com/product/5ceae0399d3ea8000196e14a_tr_1623564030417.jpeg",
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
