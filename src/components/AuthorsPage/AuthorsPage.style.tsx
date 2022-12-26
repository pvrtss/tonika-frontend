import styled from "styled-components";

export const AuthorCards = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const AuthorCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
  transition: border 0.2s, box-shadow 0.2s;
  :hover {
    border: 1px solid #649fff;
    box-shadow: 0px 0px 15px 5px rgba(34, 141, 223, 0.2);
  }
`;

export const AuthorName = styled.div`
  font-weight: 700;
  margin-bottom: 16px;
`;

export const AuthorDesc = styled.div`
  color: #5f5f5f;
  font-size: 12px;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
