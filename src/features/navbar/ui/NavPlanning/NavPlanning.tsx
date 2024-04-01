import { INavItem } from "@/entities/navbar/index";
import { Arrow } from "@/shared/Arrow/Arrow";
import { useNavigate } from "../../utils/hooks/useNavigate";
import NavList from "../NavList/NavList";
import styles from "./styles.module.css";

const navPlanning: INavItem[] = [
  { image: "timeLine", text: "Хронология" },
  { image: "backLog", text: "Бэклог" },
  { image: "table", text: "Доска" },
  { image: "goals", text: "Цели" },
  { image: "tasks", text: "Задачи" },
];


interface Props {
  title: string;
}

const NavPlanning = ({ title }: Props) => {
  const { isShow, showNavClick } = useNavigate();

  return (
    <div className={styles.nav_planning}>
      <p className={styles.title}>
        <Arrow isShow={isShow} showClick={showNavClick} />
        <span>{title}</span>
      </p>
      {isShow && <NavList navList={navPlanning} />}
    </div>
  );
};

export default NavPlanning;
