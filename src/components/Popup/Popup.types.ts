import { ReactNode } from "react";

export type PopupProps = {
  children: ReactNode;
  onClose: React.MouseEventHandler;
};
