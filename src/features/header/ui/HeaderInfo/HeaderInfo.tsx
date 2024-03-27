import { useNavigate } from "@/features/navigate/utils/hooks/useNavigate";
import circleMenu from "../../assets/circle-menu.png";
import jiraIcon from "../../assets/jira-icon.png";
import styles from "./styles.module.css";

const HeaderInfo = () => {
  const { chooseNav } = useNavigate();

  return (
    <div className={styles.info}>
      <div
        className={styles.circleMenu}
        id="header_icon"
        onClick={() => chooseNav("header_icon")}
      >
        <img className={styles.icon} src={circleMenu} alt="circled-menu" />
      </div>
      <div className={styles.jiraInfo}>
        <img className={styles.icon} src={jiraIcon} alt="jira-icon" />
        <p className={styles.title}>Jira SoftWare</p>
      </div>
    </div>
  );
};

export default HeaderInfo;
