import {
  BackLogSvg,
  CodeSvg,
  GoalsSvg,
  INavItem,
  NavItem,
  TableSvg,
  TasksSvg,
  TimeLineSvg,
} from "@/entities/navbar/index";
import styles from "./styles.module.css";
import { useMainContext } from "@/app/providers/mainContext";
import PageProjectSvg from "@/entities/navbar/ui/NavItem/svgComponents/PageProjectSvg";
import AddUrlSvg from "@/entities/navbar/ui/NavItem/svgComponents/AddUrlSvg";
import SettingProjectSvg from "@/entities/navbar/ui/NavItem/svgComponents/SettingProjectSvg";

const objImg: { [key: string]: (isActive?: boolean) => React.ReactNode } = {
  timeLine: (isActive?: boolean) => <TimeLineSvg isActive={isActive} />,
  backLog: (isActive?: boolean) => <BackLogSvg isActive={isActive} />,
  table: (isActive?: boolean) => <TableSvg isActive={isActive} />,
  goals: (isActive?: boolean) => <GoalsSvg isActive={isActive} />,
  tasks: (isActive?: boolean) => <TasksSvg isActive={isActive} />,
  code: (isActive?: boolean) => <CodeSvg isActive={isActive} />,
  pagesProject: () => <PageProjectSvg />,
  addUrl: () => <AddUrlSvg />,
  settingProject: () => <SettingProjectSvg />,
};

interface Props {
  navList: INavItem[];
}

const NavList = ({ navList }: Props) => {
  const { activeNav, chooseNav } = useMainContext();

  return (
    <div className={styles.nav_list}>
      {navList.map((item, idx) => (
        <NavItem
          key={`${item.text}_${idx}`}
          img={item.image}
          text={item.text}
          activeNav={activeNav}
          chooseNav={() => chooseNav(item.image)}
        >
          {objImg[item.image](activeNav === item.image)}
        </NavItem>
      ))}
    </div>
  );
};

export default NavList;
