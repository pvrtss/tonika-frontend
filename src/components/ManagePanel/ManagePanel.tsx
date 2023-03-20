import {
  AuthorsButton,
  ChordsButton,
  Key,
  PanelButtonText,
  PanelWrap,
  Singer,
} from "components/HomePanel/HomePanel.style";
import React from "react";
import { Link } from "react-router-dom";

import { ManagePanelProps } from "./ManagePanel.types";

export const ManagePanel: React.FC<ManagePanelProps> = () => {
  return (
    <>
      <PanelWrap>
        <Link to="/tonika-frontend/manage/songs">
          <ChordsButton>
            <PanelButtonText>Аккорды</PanelButtonText>
            <Key></Key>
          </ChordsButton>
        </Link>

        <AuthorsButton
          onClick={() => {
            alert("TODO");
          }}
        >
          <PanelButtonText>Авторы</PanelButtonText>
          <Singer></Singer>
        </AuthorsButton>
      </PanelWrap>
    </>
  );
};
