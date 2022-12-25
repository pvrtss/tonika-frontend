import styled from "styled-components";
import { ReactComponent as StarFSVG } from "../../assets/starf.svg";
import { ReactComponent as StarOSVG } from "../../assets/staro.svg";
import { ReactComponent as CheckSVG } from "assets/check.svg";
import { ReactComponent as CloseSVG } from "assets/close.svg";
import { ReactComponent as TrashSVG } from "assets/trash.svg";

export const SongStrictCardWrap = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
  transition: border 0.2s, box-shadow 0.2s;
  :hover {
    border: 1px solid #649fff;
    box-shadow: 0px 0px 15px 5px rgba(34, 141, 223, 0.2);
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    .right {
      margin-top: 12px;
    }
    justify-content: flex-start;
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

export const StyledClose = styled(CloseSVG)`
  fill: rgb(119, 27, 27);
  height: 20px;
  width: 20px;
`;

export const StyledCheck = styled(CheckSVG)`
  fill: rgb(27, 119, 27);
  height: 20px;
  width: 20px;
`;

export const StyledTrash = styled(TrashSVG)`
  fill: rgb(119, 27, 27);
  height: 20px;
  width: 20px;
`

export const DeclineButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  border-radius: 3px;
  background: #ffcbcb;
  :hover {
    background: #e6a9a9;
  }
`;

export const DeleteButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  border-radius: 3px;
  :hover {
    background: #ffcbcb;
  }
`;

export const AcceptButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px;
  border-radius: 3px;
  background: #c3f8ae;
  :hover {
    background: #a3ca93;
  }
`;

export const RightChild = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
