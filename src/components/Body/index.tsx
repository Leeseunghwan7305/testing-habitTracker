import React from "react";
import { Todo } from "../../App";
import * as S from "./styles";

interface Props {
  todo: Todo[];
  changeCount: (index: number) => void;
  deleteTodo: (index: number) => void;
}

const Middle = ({ todo, changeCount, deleteTodo }: Props) => {
  return (
    <div>
      <S.BodyBox>
        {todo.map((v, index) => {
          return (
            <S.TodoBox>
              <p>할일 : {v.hi}</p>
              <div>
                <div onClick={() => changeCount(index)}>
                  {v.count ? "카운트o" : "카운트x"}
                </div>
                <div onClick={() => deleteTodo(index)}>쓰레기</div>
              </div>
            </S.TodoBox>
          );
        })}
      </S.BodyBox>
    </div>
  );
};

export default Middle;
