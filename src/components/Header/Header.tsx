import { TriggerWrapper } from "components/TriggerWrapper";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeaderWrap, Logo, UserIco, UserIcoWrap } from "./Header.style";

import { HeaderProps } from "./Header.types";

const PopoverWrap = styled.div`
  width: 100px;
  height: 300px;
  background-color: cornflowerblue;
`;

const Popover: React.FC = () => {
  return <PopoverWrap>Popover</PopoverWrap>;
};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderWrap>
      <Link to='/home/'><Logo /></Link>
      <UserIcoWrap>
        <TriggerWrapper popover={() => <Popover />} placement={"bottom-end"}>
          <UserIco />
        </TriggerWrapper>
      </UserIcoWrap>
    </HeaderWrap>
  );
};
