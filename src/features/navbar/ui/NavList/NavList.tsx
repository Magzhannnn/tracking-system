import { INavItem, NavItem } from "@/entities/navbar/index";
import { memo, useCallback } from "react";
import { useNavigate } from "../../utils/hooks/useNavigate";
import styles from "./styles.module.css";

interface Props {
  navList: INavItem[];
}

const NavList = ({ navList }: Props) => {
  const { activeNav, chooseNav } = useNavigate();

  const handleClick = useCallback((img: string) => {
    chooseNav(img);
  });

  return (
    <div className={styles.nav_list}>
      {navList.map((item) => (
        <NavItem
          key={item.text}
          img={item.image}
          text={item.text}
          activeNav={activeNav}
          chooseNav={handleClick}
        />
      ))}
    </div>
  );
};

export default NavList;
