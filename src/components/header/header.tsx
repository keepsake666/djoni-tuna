import styles from "./styles.module.css";
import Logo from "@/ui/logo/logo";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <ul className={styles.list}>
          <li className={styles.item}>город</li>
          <li className={styles.item}>Акции</li>
          <li className={styles.item}>О нас</li>
          <li className={styles.item}>Доставка</li>
          <li className={styles.item}>Контакты</li>
        </ul>
      </div>
      <div>
        <div>8 (999) 000-99-99</div>
        <p>Прием заказов с 9:00 до 23:00</p>
      </div>
    </header>
  );
};

export default Header;
