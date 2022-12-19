import styled from "styled-components";
import { ReactComponent as Soundhole } from '../../assets/soundhole.svg';

export const Spinner = styled(Soundhole)`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  width: 150px;
  height: 150px;
  animation: spinner 1.5s linear infinite;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;
