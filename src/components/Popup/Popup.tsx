import { BodyPortal } from "components/BodyPortal";
import React from "react";
import {
  CloseWrap,
  Fader,
  PopupContent,
  PopupWrap,
  StyledClose,
} from "./Popup.style";

import { PopupProps } from "./Popup.types";

export const Popup: React.FC<PopupProps> = ({ children, onClose }) => {
  return (
    <BodyPortal>
      <Fader></Fader>

      <PopupWrap>
        <CloseWrap onClick={onClose}>
          <StyledClose />
        </CloseWrap>
        <PopupContent>{children}</PopupContent>
      </PopupWrap>
    </BodyPortal>
  );
};
