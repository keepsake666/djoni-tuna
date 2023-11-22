"use client";
import { Navigation, Pagination, A11y } from "swiper/modules";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const SwiperComponent = () => {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slideSwiper}>
          <img
            className={styles.slide}
            alt={""}
            src={
              "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className={styles.slide}
            alt={""}
            src={
              "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className={styles.slide}
            alt={""}
            src={
              "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className={styles.slide}
            alt={""}
            src={
              "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg"
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
