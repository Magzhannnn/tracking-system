import React from "react";

interface Props {
  type: string;
  className: string;
  inputText: string;
  placeholder: string;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, className, inputText, placeholder, onInput }: Props) => {
  return (
    <input
      className={className}
      type={type}
      value={inputText}
      onChange={onInput}
      placeholder={placeholder}
    />
  );
};

export default Input;
