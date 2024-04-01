import { useDebounce } from "../../utils/hooks/useDebounce";
import styles from "./styles.module.css";

const HeaderInput = () => {
  const { inputText, setInputText } = useDebounce();

  return (
    <div className={styles.right}>
      <div className={styles.search_icon}>
        <svg width="18" height="18" viewBox="0 0 24 24" role="presentation">
          <path
            d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
            fill="#6B778C"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        className={styles.input}
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Поиск"
      />
    </div>
  );
};

export default HeaderInput;
