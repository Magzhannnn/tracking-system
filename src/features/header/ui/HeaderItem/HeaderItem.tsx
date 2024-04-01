import expandArrow from "../../assets/expand-arrow.png";
import expandArrowActive from "../../assets/expand-arrow-active.png";
import styles from "./styles.module.css";

interface Props {
  title: string;
  article: string;
  activeHeader: string;
  openPopUp: () => void;
}

const HeaderItem = ({ title, article, activeHeader, openPopUp }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    openPopUp();
  };

  return (
    <div
      id={`nav_item_${article}`}
      className={`${styles.headItem} ${
        activeHeader === `nav_item_${article}` && styles.active
      }`}
      onClick={handleClick}
    >
      <span>{title}</span>
      <img
        src={
          activeHeader === `nav_item_${article}`
            ? expandArrowActive
            : expandArrow
        }
        alt="expand-arrow"
      />
    </div>
  );
};

export default HeaderItem;
