import page from "./page.module.css";
import SwiperComponent from "@/components/swipper-banner/swipper-banner";
import SwiperStock from "@/components/swiper-stock/swiper-stock";

export default function Home() {
  return (
    <div className={page.main}>
      <SwiperComponent />
      <SwiperStock />
    </div>
  );
}
