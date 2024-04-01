import { INavItem } from "@/entities/navbar/index";
import { Arrow } from "@/shared/Arrow/Arrow";
import NavList from "../NavList/NavList";
import styles from "./styles.module.css";
import { useState } from "react";

interface Props {
  title: string;
  navItems: INavItem[];
}

const NavBlock = ({ title, navItems }: Props) => {
  const [isShow, setIsShow] = useState(
    JSON.parse(localStorage.getItem(`isShow_${title}`) ?? "true")
  );

  const showNavClick = () => {
    localStorage.setItem(`isShow_${title}`, JSON.stringify(!isShow));
    setIsShow(!isShow);
  };

  return (
    <div className={styles.nav_planning}>
      <p className={styles.title}>
        <Arrow isShow={isShow} showClick={showNavClick} />
        <span>{title}</span>
      </p>
      {isShow && <NavList navList={navItems} />}
    </div>
  );
};

export default NavBlock;
