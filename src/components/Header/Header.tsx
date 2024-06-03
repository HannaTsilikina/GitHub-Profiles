import styles from "./Header.module.scss";
import ThemeSwitcher from "./../ThemeSwitcher/ThemeSwitcher";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <div className={styles["logo"]}>DevFinder</div>
      <ThemeSwitcher />
    </div>
  );
};
export default Header;
