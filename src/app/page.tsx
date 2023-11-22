"use client";
import page from "./page.module.css";
import SwiperComponent from "@/components/swipper-banner/swipper-banner";
import SwiperStock from "@/components/swiper-stock/swiper-stock";
import Product from "@/ui/product/product";

export default function Home() {
  return (
    <div className={page.main}>
      <SwiperComponent />
      <SwiperStock />
      <Product
        image={
          "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg"
        }
        name={"asd"}
        description={"asdkjalskdjlkj alskdjalksjd"}
        price={123}
        onAddToCart={() => {
          console.log("hello");
        }}
      />
    </div>
  );
}
