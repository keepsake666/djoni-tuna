import page from "./page.module.css";
import SwiperComponent from "@/components/swipper/swipper";

export default function Home() {
  return (
    <div className={page.main}>
      <SwiperComponent />
    </div>
  );
}
