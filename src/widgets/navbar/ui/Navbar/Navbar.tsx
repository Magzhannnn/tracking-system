import { INavBlock, INavItem, NavInfo } from "@/entities/navbar/index";
import { NavBlock } from "@/features/navbar/index";
import styles from "./styles.module.css";
import NavList from "@/features/navbar/ui/NavList/NavList";
import Footer from "@/shared/Footer/Footer";

const allNavBlock: INavBlock[] = [
  {
    title: "Планирование",
    navItems: [
      { image: "timeLine", text: "Хронология" },
      { image: "backLog", text: "Бэклог" },
      { image: "table", text: "Доска" },
      { image: "goals", text: "Цели" },
      { image: "tasks", text: "Задачи" },
    ],
  },
  {
    title: "Разработка",
    navItems: [{ image: "code", text: "Код" }],
  },
];

const navFooterItmes: INavItem[] = [
  { image: "pagesProject", text: "Страницы проекта" },
  { image: "addUrl", text: "Добавить ярлык" },
  { image: "settingProject", text: "Настройки проекта" },
];

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavInfo />
      <div className={styles.nav_blocks}>
        {allNavBlock.map((navBlock) => (
          <NavBlock title={navBlock.title} navItems={navBlock.navItems} />
        ))}
      </div>
      <NavList navList={navFooterItmes} />
      <Footer title="Это проект, управляемый командой" text="Подробнее" />
    </nav>
  );
};

export default Navbar;
