import styles from "./styles.module.css";
import navInfoImage from "../../assets/navInfoImage.png";

const NavInfo = () => {
  return (
    <div className={styles.wrap}>
      <img className={styles.img} src={navInfoImage} alt="navInfoImage" />
      <div className={styles.content}>
        <p className={styles.title}>qbots_scrum</p>
        <p className={styles.text}>Проект по разработке ПО</p>
      </div>
    </div>
  );
};

export default NavInfo;
