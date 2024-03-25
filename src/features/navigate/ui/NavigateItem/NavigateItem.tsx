import expandArrow from "../../assets/expand-arrow.png";
import expandArrowActive from "../../assets/expand-arrow-active.png";
import styles from "./styles.module.css";

interface Props {
  title: string;
  article: string;
  activeNav: string;
  chooseNav: () => void;
}

const NavigateItem = ({ title, article, activeNav, chooseNav }: Props) => {
  return (
    <div
      className={`${styles.navItem} ${activeNav === article && styles.active}`}
      onClick={chooseNav}
    >
      <span>{title}</span>
      <img
        src={activeNav === article ? expandArrowActive : expandArrow}
        alt="expand-arrow"
      />
    </div>
  );
};

export default NavigateItem;
