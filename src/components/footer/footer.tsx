import styles from "./styles.module.css";
import Logo from "@/ui/logo/logo";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.navigation}>
          <h3 className={styles.navigationTitle}>Навигация</h3>
          <ul className={styles.list}>
            <li className={styles.item}>Акции</li>
            <li className={styles.item}>О нас</li>
            <li className={styles.item}>Доставка</li>
            <li className={styles.item}>Контакты</li>
            <li className={styles.item}>Правовая информация</li>
          </ul>
        </div>
        <div className={styles.contacts}>
          <div className={styles.containerNumber}>
            <p className={styles.contactsText}>Заказывайте по телефону</p>
            <p className={styles.contactsNumber}>+7 (999) 999-99-99</p>
          </div>
          <div>
            <p className={styles.contactsText}>Доставка работает</p>
            <p className={styles.contactsNumber}>с 10:30 до 23:30</p>
          </div>
        </div>
        <div className={styles.app}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <p className={styles.appText}>
            Любимые блюда в приложении! Скачай сейчас!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
