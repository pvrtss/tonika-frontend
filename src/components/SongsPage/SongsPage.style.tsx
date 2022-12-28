import styled from "styled-components";

export const Input = styled.input<{ top?: string }>`
  background: #e0e0e0;
  border: none;
  appearance: none;
  font-family: inherit;
  border-radius: 6px;
  padding: 6px;
  outline: none;
  ::placeholder {
    color: #3f3f3f;
  }
  font-size: 14px;
  width: 100%;
  max-width: 500px;
  margin-top: ${({ top }) => (top ? top : "4px")};
`;

export const MPWrap = styled.div`
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 8px;
`;
