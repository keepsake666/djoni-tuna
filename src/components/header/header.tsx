import styles from "./styles.module.css";
import Logo from "@/ui/logo/logo";
import Position from "@/ui/icon/position/position";
import Arrow from "@/ui/icon/arrow/arrow";
import Search from "@/ui/icon/search/search";
import Basket from "@/ui/icon/basket/basket";
import User from "@/ui/icon/user/user";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.containerInfo}>
          <Logo />
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.containerItem}>
                {" "}
                <Position />
                <p className={styles.textItem}>Город</p>
                <Arrow />
              </div>
            </li>
            <li className={styles.item}>Акции</li>
            <li className={styles.item}>О нас</li>
            <li className={styles.item}>Доставка</li>
            <li className={styles.item}>Контакты</li>
          </ul>
        </div>
        <div>
          <div className={styles.number}>8 (999) 000-99-99</div>
          <p className={styles.text}>Прием заказов с 9:00 до 23:00</p>
        </div>
      </div>
      <div className={styles.containerMenu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>Комбо наборы</li>
          <li className={styles.menuItem}>Пицца</li>
          <li className={styles.menuItem}>Роллы</li>
          <li className={styles.menuItem}>Суши</li>
          <li className={styles.menuItem}>Сеты</li>
          <li className={styles.menuItem}>Вок и закуски</li>
          <li className={styles.menuItem}>Салаты</li>
          <li className={styles.menuItem}>Десерты</li>
          <li className={styles.menuItem}>Напитки</li>
          <li className={styles.menuItem}>Дополнительно</li>
          <li className={styles.menuItem}>
            {" "}
            <button className={styles.button}>
              <Search />
            </button>
          </li>
        </ul>
        <div className={styles.containerBasket}>
          <div className={styles.containerTextBasket}>
            <Basket />
            <p className={styles.textBasket}>100р</p>
          </div>
          <div className={styles.containerTextBasket}>
            <User />
            <p className={styles.textBasket}>100</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
