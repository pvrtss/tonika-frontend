import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/tonika-logo-small-a.svg";

export const Logo = styled(LogoSVG)`
  position: absolute;
  top: 16px;
  left: 16px;
  fill: white;
  width: 120px;
  stroke: white;
`;

export const LoginBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginCard = styled.div`
  width: 300px;
  padding: 32px;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 12px;

  @media (max-width: 362px) {
    width: 200px;
  }
`;

export const LoginText = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 40px;
`;

export const LoginFootText = styled.div`
  color: #9e9e9e;
  font-size: 12px;
  margin-top: 40px;
`;

export const LoginInput = styled.input`
  background: #e0e0e0;
  border: none;
  appearance: none;
  font-family: inherit;
  height: 32px;
  border-radius: 6px;
  outline: none;
  ::placeholder {
    color: #3f3f3f;
  }
`;

export const LoginButton = styled.button`
  margin-top: 16px;
  position: relative;
  background-image: radial-gradient(
      circle,
      #000000 0%,
      #000000 100%
    );
  z-index: 1;
  border: none;
  appearance: none;
  font-family: inherit;
  height: 32px;
  border-radius: 6px;
  outline: none;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: ease-in-out all 0.1s;
  transform: scale(1);
  :hover {
    box-shadow: 0px 0px 5px 5px rgba(251, 205, 255, 0.705);
  }
  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: radial-gradient(
      circle,
      rgba(63, 94, 251, 1) 0%,
      rgba(252, 70, 107, 1) 100%
    );
    border-radius: 6px;
    z-index: -1;
    transition: opacity 0.2s linear;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
  }
  :active {
    transform: scale(1.05);
  }
`;

export const LoginSwitcher = styled.b`
  margin-left: 8px;
  color: #0047cc;
  text-decoration: underline;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
`;
