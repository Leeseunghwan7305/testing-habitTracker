import styled from "styled-components";

export const BodyBox = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const TodoBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & p {
    width: 400px;
    flex-grow: 1;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: center;

    font-size: 10px;
    & div {
      width: 50px;
      text-align: center;
    }

    div:nth-child(1):hover {
      scale: 1.1;
    }
  }
`;
