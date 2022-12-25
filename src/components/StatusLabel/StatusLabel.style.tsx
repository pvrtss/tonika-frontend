import styled from "styled-components";
import { StatusLabelProps } from "./StatusLabel.types";

export const LabelWrap = styled.div<StatusLabelProps>`
  background-color: ${({ status }) =>
    status === "AC" ? "#7acc7e" : status === "PE" ? "#ffd16f" : "#ff6f6f"};
  padding: 3px;
  border-radius: 3px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LabelText = styled.div<StatusLabelProps>`
  font-size: 12px;
  font-weight: 500;
  color: ${({ status }) =>
    status === "AC" ? "#004b04" : status === "PE" ? "#926400" : "#640000"};
`;
