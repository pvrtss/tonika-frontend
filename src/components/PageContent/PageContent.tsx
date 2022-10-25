import React from "react";
import { ContentWrap } from "./PageContent.style";
import { PageContentProps } from "./PageContent.types";

export const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return <ContentWrap>{children}</ContentWrap>;
};
