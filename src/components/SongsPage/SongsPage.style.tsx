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