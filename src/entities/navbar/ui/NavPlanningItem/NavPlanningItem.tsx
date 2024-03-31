import styles from "./styles.module.css";
import TimeLineSvg from "./svgComponents/TimeLineSvg";
import BackLogSvg from "./svgComponents/BackLogSvg";
import TableSvg from "./svgComponents/TableSvg";
import GoalsSvg from "./svgComponents/GoalsSvg";
import TasksSvg from "./svgComponents/TasksSvg";

const objImg = {
  timeLine: (isActive: boolean) => <TimeLineSvg isActive={isActive} />,
  backLog: (isActive: boolean) => <BackLogSvg isActive={isActive} />,
  table: (isActive: boolean) => <TableSvg isActive={isActive} />,
  goals: (isActive: boolean) => <GoalsSvg isActive={isActive} />,
  tasks: (isActive: boolean) => <TasksSvg isActive={isActive} />,
};

interface Props {
  img: string;
  text: string;
  activeNav: string;
  chooseNav: () => void;
}

const NavPlanningItem = ({ img, text, activeNav, chooseNav }: Props) => {
  return (
    <div
      className={`${styles.nav_item} ${activeNav === img && styles.active}`}
      onClick={chooseNav}
    >
      {objImg[img](activeNav === img)}

      <p className={`${styles.nav_item_text} ${activeNav === img && styles.active_text}`}>{text}</p>
    </div>
  );
};

export default NavPlanningItem;
