import { useMainContext } from "@/app/providers/mainContext";
import circleMenu from "../../assets/circle-menu.png";
import activeCircleMenu from "../../assets/active-circle-menu.png";
import jiraIcon from "../../assets/jira-icon.png";
import styles from "./styles.module.css";

const HeaderInfo = () => {
  const { activeHeader, openPopUp } = useMainContext();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    openPopUp("header_icon");
  };

  return (
    <>
      <div className={styles.info}>
        <div
          className={`${styles.circleMenu} ${
            activeHeader === "header_icon" && styles.active
          }`}
          id="header_icon"
          onClick={handleClick}
        >
          <img
            className={styles.icon}
            src={activeHeader === "header_icon" ? activeCircleMenu : circleMenu}
            alt="circled-menu"
          />
        </div>
        <div className={styles.jiraInfo}>
          <img className={styles.icon} src={jiraIcon} alt="jira-icon" />
          <p className={styles.title}>Jira SoftWare</p>
        </div>
      </div>
    </>
  );
};

export default HeaderInfo;
