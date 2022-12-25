import styled from "styled-components";
import { ReactComponent as StarFSVG } from "../../assets/starf.svg";
import { ReactComponent as StarOSVG } from "../../assets/staro.svg";

export const SongStrictCardWrap = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
  transition: border 0.2s, box-shadow 0.2s;
  :hover {
    border: 1px solid #649fff;
    box-shadow: 0px 0px 15px 5px rgba(34, 141, 223, 0.2);
  }
`;

export const LeftChild = styled.div`
  display: flex;
  img {
    border-radius: 8px;
    width: 50px;
  }
`;

export const StarF = styled(StarFSVG)`
  width: 20px;
  fill: #e7a310;
`;

export const StarO = styled(StarOSVG)`
  width: 20px;
  fill: #999999;
`;
