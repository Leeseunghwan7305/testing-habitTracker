import React, { useEffect, useState } from "react";

import { Todo } from "../../App";
import * as S from "./styles";

interface Props {
  todo: Todo[];
  allCount: number;
}

const Nav = ({ todo, allCount }: Props) => {
  return (
    <div>
      <S.Head>
        <div>Habit Tracker</div>
        <div>
          <p>{allCount}</p>
        </div>
      </S.Head>
    </div>
  );
};

export default Nav;
