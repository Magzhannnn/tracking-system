import styles from "./styles.module.css";
import TimeLineSvg from "./svgComponents/TimeLineSvg";
import BackLogSvg from "./svgComponents/BackLogSvg";
import TableSvg from "./svgComponents/TableSvg";
import GoalsSvg from "./svgComponents/GoalsSvg";
import TasksSvg from "./svgComponents/TasksSvg";
import { memo } from "react";

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
  chooseNav: (img: string) => void;
}

const NavItem = memo(({ img, text, activeNav, chooseNav }: Props) => {
  console.log("item");

  return (
    <div
      className={`${styles.nav_item} ${activeNav === img && styles.active}`}
      onClick={() => chooseNav(img)}
    >
      {objImg[img](activeNav === img)}

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
