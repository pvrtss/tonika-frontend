import styled from "styled-components";

export const SongsWrap = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const SongElement = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  max-width: 700px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 4px 8px 4px 4px;
  border-radius: 8px;
  border: 1px solid white;
  box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
  transition: border 0.2s, box-shadow 0.2s;
  :hover {
    border: 1px solid #649fff;
    box-shadow: 0px 0px 15px 5px rgba(34, 141, 223, 0.2);
  }
  img {
    height: 36px;
    border-radius: 4px;
  }
`;

export const RightChild = styled.div`
  margin-left: 16px;
`;
