import { useEffect } from "react";
import { useState } from "react";

export const useDebounce = () => {
  const [inputText, setInputText] = useState("");
  const [debounceText, setDebounceText] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceText(inputText);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [inputText]);

  return { inputText, debounceText, setInputText };
};
