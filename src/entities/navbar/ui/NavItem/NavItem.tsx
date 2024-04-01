import styles from "./styles.module.css";

interface Props {
  img: string;
  text: string;
  activeNav: string;
  children: React.ReactNode;
  chooseNav: () => void;
}

const NavItem = ({ img, text, activeNav, chooseNav, children }: Props) => {
  console.log("item");

  return (
    <div
      className={`${styles.nav_item} ${activeNav === img && styles.active}`}
      onClick={chooseNav}
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
};

export default NavItem;
