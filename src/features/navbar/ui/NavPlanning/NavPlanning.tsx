import { NavPlanningItem } from "@/entities/navbar/index";
import { useNavigate } from "../../utils/hooks/useNavigate";
import styles from "./styles.module.css";

const navPlanning = [
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
  const { activeNav, chooseNav } = useNavigate();

  return (
    <div className={styles.nav_planning}>
      <p className={styles.title}>{title}</p>
      {navPlanning.map((item) => (
        <NavPlanningItem
          key={item.text}
          img={item.image}
          text={item.text}
          activeNav={activeNav}
          chooseNav={() => chooseNav(item.image)}
        />
      ))}
    </div>
  );
};

export default NavPlanning;
