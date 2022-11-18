import styled from "styled-components";

export const Head = styled.div`
  width: 70%;
  margin: 0 auto;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9fffd1;
  font-size: 3rem;
  border: 5px solid #3afc9e;
  box-sizing: border-box;

  & div:nth-child(1) {
    padding-left: 30px;
  }

  & div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-left: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #cdffa0;
    border: 2.5px solid black;
  }
`;
