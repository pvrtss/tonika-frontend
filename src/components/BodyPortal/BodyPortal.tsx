import React from "react";
import { createPortal } from "react-dom";
import { BodyPortalProps } from "./BodyPortal.types";

const modalRootEl = document.getElementById("modal-root") as Element;

export const BodyPortal: React.FC<BodyPortalProps> = ({ children }) => {
  return createPortal(children, modalRootEl);
};
