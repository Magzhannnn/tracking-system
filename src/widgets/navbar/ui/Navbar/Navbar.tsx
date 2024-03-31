import { NavInfo } from "@/entities/navbar/index";
import { NavPlanning } from "@/features/navbar/index";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavInfo />
      <NavPlanning title="Планирование" />
    </nav>
  );
};

export default Navbar;
