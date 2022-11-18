import styled from "styled-components";
export const InputBox = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
`;
export const InputTag = styled.input.attrs({
  placeholder: "할 일을 써주세요!",
})`
  box-sizing: border-box;
  width: 400px;
  border: 3px solid #00ff85;
  flex-grow: 1;
`;
export const Button = styled.button`
  height: 70px;
  width: 100px;
  color: white;
  border: 2px solid #3afc9e;
  background-color: #9fffd1;
  font-size: 1.7rem;

  &:hover {
    font-size: 1.9rem;
  }
`;
