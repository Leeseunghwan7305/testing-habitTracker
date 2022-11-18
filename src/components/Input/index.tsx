import React, { useRef, useState } from "react";
import * as S from "./styles";

interface Props {
  addTodo: (add: string) => void;
}

const Input = ({ addTodo }: Props) => {
  const [changeInput, setChangeInput] = useState("");
  const inputRef = useRef<any>();
  const changeInputEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeInput(e.target.value);
  };

  const pushInput = () => {
    if (changeInput == "") return;
    addTodo(changeInput);
    setChangeInput("");
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <S.InputBox>
        <S.InputTag ref={inputRef} onChange={changeInputEvent} />
        <S.Button onClick={pushInput}>Add</S.Button>
      </S.InputBox>
    </div>
  );
};

export default Input;
