import styled from "styled-components";
import { ReactComponent as CloseIcon } from "assets/close.svg";

export const PopupWrap = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Fader = styled.div`
  background-color: black;
  backdrop-filter: blur(3px);
  opacity: 0.9;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 500;
`;

export const PopupContent = styled.div`
  width: 500px;
  background: white;
  border-radius: 16px;
  padding: 20px;
  font-size: 14px;
  color: black;
  @media (max-width: 600px) {
    width: 95vw;
  }
`;

export const StyledClose = styled(CloseIcon)`
  fill: #c2c2c2;
  width: 30px;
  height: 30px;
`;

export const CloseWrap = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;

  :hover {
    background: rgba(114, 114, 114, 0.4);
  }
`;
