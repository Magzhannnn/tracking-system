import { HeaderInfo, HeaderList } from "@/features/header";
import HeaderInput from "@/features/header/ui/HeaderInput/HeaderInput";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <HeaderInfo />
        <HeaderList />
      </div>
      <HeaderInput />
    </header>
  );
};

export default Header;
