"use client";
import { A11y } from "swiper/modules";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const SwiperStock = () => {
  return (
    <div className={styles.container}>
      <Swiper modules={[A11y]} slidesPerView={6} className={styles.swiper}>
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

export default SwiperStock;
