import circleMenu from "../../assets/circle-menu.png";
import jiraIcon from "../../assets/jira-icon.png";
import styles from "./styles.module.css";
import { NavigateList } from "@/features/navigate";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <div className={styles.circleMenu}>
          <img className={styles.icon} src={circleMenu} alt="circled-menu" />
        </div>
        <div className={styles.jiraInfo}>
          <img className={styles.icon} src={jiraIcon} alt="jira-icon" />
          <p className={styles.title}>Jira SoftWare</p>
        </div>
      </div>
      <NavigateList />
    </header>
  );
};

export default Header;
