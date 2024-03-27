import expandArrow from "../../assets/expand-arrow.png";
import expandArrowActive from "../../assets/expand-arrow-active.png";
import styles from "./styles.module.css";
import React, { useCallback } from "react";

interface Props {
  title: string;
  article: string;
  activeNav: string;
  chooseNav: () => void;
}

const NavigateItem: React.FC<Props> = React.memo(
  ({ title, article, activeNav, chooseNav }) => {
    console.log("Rendering NavigateItem");

    const handleClick = useCallback(() => {
      chooseNav();
    }, []);

    return (
      <div
        id={`nav_item_${article}`}
        className={`${styles.navItem} ${
          activeNav === `nav_item_${article}` && styles.active
        }`}
        onClick={handleClick}
      >
        <span>{title}</span>
        <img
          src={
            activeNav === `nav_item_${article}`
              ? expandArrowActive
              : expandArrow
          }
          alt="expand-arrow"
        />
      </div>
    );
  }
);

export default NavigateItem;
