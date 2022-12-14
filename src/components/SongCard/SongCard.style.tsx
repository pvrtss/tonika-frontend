import styled from "styled-components";

export const CardWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid transparent;
  padding: 8px;
  height: 100px;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
  transition: border 0.2s, box-shadow 0.2s;
  :hover {
    border: 1px solid #649fff;
    box-shadow: 0px 0px 15px 5px rgba(34, 141, 223, 0.2);
  }
  img {
    border-radius: 8px;
    width: 84px;
    height:84px;
  }
`;

export const CardTextWrap = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  height: 48px;
  @media (max-width: 426px){
    width: 150px;
  }
`;
