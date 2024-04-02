import styles from "./styles.module.css";

interface Props {
  isSelectHeaderInput: boolean;
}

const SearchIcon = ({ isSelectHeaderInput }: Props) => {
  return (
    <div className={styles.search_icon}>
      <svg width="18" height="18" viewBox="0 0 24 24" role="presentation">
        <path
          d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
          fill={isSelectHeaderInput ? "#344563" : "#6B778C"}
          fillRule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

export default SearchIcon;
