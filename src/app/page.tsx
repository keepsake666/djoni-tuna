"use client";
import page from "./page.module.css";
import SwiperComponent from "@/components/swipper-banner/swipper-banner";
import SwiperStock from "@/components/swiper-stock/swiper-stock";
import ProductList from "@/components/product-list/product-list";

export default function Home() {
  const FakeProducts = [
    {
      image:
        "https://avatars.mds.yandex.net/i?id=5b6d8bfb940662d039066f0b889f3efe9b04c3a7-11003961-images-thumbs&n=13",
      name: "Product 1",
      description: "Description of product 1",
      price: 100,
      weight: 500,
    },
    {
      image:
        "https://avatars.mds.yandex.net/i?id=5b6d8bfb940662d039066f0b889f3efe9b04c3a7-11003961-images-thumbs&n=13",
      name: "Product 2",
      description: "Description of product 2",
      price: 200,
      weight: 1000,
    },
    {
      image:
        "https://avatars.mds.yandex.net/i?id=5b6d8bfb940662d039066f0b889f3efe9b04c3a7-11003961-images-thumbs&n=13",
      name: "Product 3",
      description: "Description of product 3",
      price: 300,
      weight: 750,
    },
    {
      image:
        "https://avatars.mds.yandex.net/i?id=5b6d8bfb940662d039066f0b889f3efe9b04c3a7-11003961-images-thumbs&n=13",
      name: "Product 4",
      description: "Description of product 4",
      price: 400,
      weight: 900,
    },
    {
      image:
        "https://avatars.mds.yandex.net/i?id=5b6d8bfb940662d039066f0b889f3efe9b04c3a7-11003961-images-thumbs&n=13",
      name: "Product 5",
      description: "Description of product 5",
      price: 500,
      weight: 1200,
    },
  ];
  return (
    <div className={page.main}>
      <SwiperComponent />
      <SwiperStock />
      <ProductList name={"Роллы"} products={FakeProducts} />
    </div>
  );
}
