import styled from "styled-components";

export const CreateButton = styled.div`
  cursor: pointer;
  color: white;
  background: #649fff;
  font-weight: 700;
  padding: 8px 32px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
  transition: border 0.2s, box-shadow 0.2s;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    box-shadow: 0px 0px 15px 5px rgba(34, 141, 223, 0.2);
  }
  :active {
    background: white;
    color: #649fff;
  }
`;

export const Form = styled.div`
  margin-top: 80px;
  width: 100%;
  padding: 0px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1000px) {
    padding: 0px;
  }
`;
