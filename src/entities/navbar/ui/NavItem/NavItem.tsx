import { memo } from "react";
import styles from "./styles.module.css";

interface Props {
  img: string;
  text: string;
  activeNav: string;
  children: React.ReactNode;
  chooseNav: (img: string) => void;
}

const NavItem = memo(({ img, text, activeNav, chooseNav, children }: Props) => {
  return (
    <div
      className={`${styles.nav_item} ${activeNav === img && styles.active}`}
      onClick={() => chooseNav(img)}
    >
      {children}

      <p
        className={`${styles.nav_item_text} ${
          activeNav === img && styles.active_text
        }`}
      >
        {text}
      </p>
    </div>
  );
});

export default NavItem;
