import { useMainContext } from "@/app/providers/mainContext";
import DeleteBtn from "@/shared/DeleteBtn/DeleteBtn";
import Input from "@/shared/Input/Input";
import SearchIcon from "@/shared/SearchIcon/SearchIcon";
import * as React from "react";
import { useDebounce } from "../../utils/hooks/useDebounce";
import styles from "./styles.module.css";

const HeaderInput = () => {
  const { inputText, setInputText } = useDebounce();
  const { isSelectHeaderInput, onSelectHeaderInput } = useMainContext();

  const selectInputBlockHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onSelectHeaderInput();
  };

  const deleteInputHandle = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    e.stopPropagation();
    setInputText("");
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div
      className={`${styles.right} ${
        isSelectHeaderInput && styles.selected_block
      }`}
      onClick={selectInputBlockHandle}
    >
      <SearchIcon isSelectHeaderInput={isSelectHeaderInput} />
      <Input
        type="text"
        inputText={inputText}
        placeholder={isSelectHeaderInput ? "Search Jira" : "Поиск"}
        className={`${styles.input} ${
          isSelectHeaderInput && styles.selected_input
        }`}
        onInput={inputHandler}
      />
      {inputText.length > 0 && <DeleteBtn onDelete={deleteInputHandle} />}
    </div>
  );
};

export default HeaderInput;
