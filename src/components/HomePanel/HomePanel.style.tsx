import styled from "styled-components";
import { ReactComponent as KeySVG } from "../../assets/key.svg";
import { ReactComponent as SingerSVG } from "../../assets/singer.svg";
import { ReactComponent as GearSVG } from "../../assets/gear.svg";
import { ReactComponent as FolderSVG } from "../../assets/folder.svg";

export const PanelWrap = styled.div`
  margin-top: 48px;
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
`;

export const ChordsButton = styled.div`
  background-color: #34477c;
  height: 120px;
  padding: 8px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: ease-in-out all 0.1s;
  transform: scale(1);
  :hover {
    transform: scale(1.02);
  }
`;

export const AuthorsButton = styled.div`
  background-color: #7f4994;
  height: 120px;
  padding: 8px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: ease-in-out all 0.1s;
  transform: scale(1);
  :hover {
    transform: scale(1.02);
  }
`;

export const FoldersButton = styled.div`
  background-color: #698b32;
  height: 120px;
  padding: 8px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: ease-in-out all 0.1s;
  transform: scale(1);
  :hover {
    transform: scale(1.02);
  }
`;

export const ManageButton = styled.div`
  background-color: #994040;
  height: 120px;
  padding: 8px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: ease-in-out all 0.1s;
  transform: scale(1);
  :hover {
    transform: scale(1.02);
  }
`;

export const Key = styled(KeySVG)`
  fill: #9bbbd6;
  width: 100px;
  position: absolute;
  left: -12px;
  bottom: -16px;
`;

export const Singer = styled(SingerSVG)`
  fill: #c06de0;
  width: 100px;
  position: absolute;
  left: -12px;
  bottom: -16px;
`;

export const Gear = styled(GearSVG)`
  fill: #e26464;
  width: 100px;
  position: absolute;
  left: -12px;
  bottom: -16px;
`;

export const Folder = styled(FolderSVG)`
  fill: #a7db54;
  width: 100px;
  position: absolute;
  left: -12px;
  bottom: -16px;
`;


export const PanelButtonText = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  color: white;
  font-family: inherit;
  font-weight: 700;
  font-size: 24px;
`;
