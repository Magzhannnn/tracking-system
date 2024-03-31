import { HeaderInfo, HeaderList } from "@/features/header";
import styles from "./styles.module.css";

const Header = () => {

  return (
    <header className={styles.header}>
      <HeaderInfo />
      <HeaderList />
    </header>
  );
};

export default Header;
