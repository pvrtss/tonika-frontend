import React from "react";
import { Link } from "react-router-dom";
import {
  AuthorsButton,
  ChordsButton,
  Folder,
  FoldersButton,
  Gear,
  Key,
  ManageButton,
  PanelButtonText,
  PanelWrap,
  Singer,
} from "./HomePanel.style";

import { HomePanelProps } from "./HomePanel.types";

export const HomePanel: React.FC<HomePanelProps> = ({ manager, user }) => {
  return (
    <PanelWrap>
      <Link to="/tonika-frontend/songs">
        <ChordsButton>
          <PanelButtonText>Аккорды</PanelButtonText>
          <Key></Key>
        </ChordsButton>
      </Link>
      <Link to="/tonika-frontend/authors">
        <AuthorsButton>
          <PanelButtonText>Авторы</PanelButtonText>
          <Singer></Singer>
        </AuthorsButton>
      </Link>
      {user && (
        <FoldersButton>
          <PanelButtonText>Коллекция</PanelButtonText>
          <Folder></Folder>
        </FoldersButton>
      )}
      {manager && user && (
        <Link to="/tonika-frontend/manage">
          <ManageButton>
            <PanelButtonText>Управление</PanelButtonText>
            <Gear></Gear>
          </ManageButton>
        </Link>
      )}
    </PanelWrap>
  );
};
