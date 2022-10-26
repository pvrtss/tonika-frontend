import React from "react";
import { Spinner, SpinnerContainer } from "./LoadingSpinner.style";

export const LoadingSpinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};
