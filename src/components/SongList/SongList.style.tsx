import styled from "styled-components";

export const SongsWrap = styled.div`
  display: flex;
  flex-grow: 0;
  scroll-behavior: smooth;
  overflow-y: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  padding: 16px;
  gap: 16px;
`;
