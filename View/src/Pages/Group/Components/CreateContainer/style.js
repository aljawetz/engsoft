import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  border-radius: 4px;

  > form {
    [type=text] {
      padding: 0 5px;
      margin: 0 10px;
      width: 70%;
    }
    button {
      background-color: lightslategray;
      color: white;
      border-radius: 5px;
      padding: 5px;
      border: none;
    }

  }
`;

export const ItemContainer = styled.div`
  text-align: center;
  margin: 30px;
  padding: 20px;
  border-radius: 30px;
  background-color: lightgrey;

  > * {
    &:first-child{
      margin: 10px 0;
      font-size: 120%;
    }
  }
`;