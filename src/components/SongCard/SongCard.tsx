import React from "react";
import { CardTextWrap, CardWrap } from "./SongCard.style";

import { SongCardProps } from "./SongCard.types";

export const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <CardWrap>
      <img src={"tonika-frontend/" + song.cover} alt="song cover"></img>
      <CardTextWrap>
        <span style={{ whiteSpace: "nowrap" }}>
          <b>{song.name}</b>
        </span>
        <span style={{ whiteSpace: "nowrap" }}>{song.author}</span>
      </CardTextWrap>
    </CardWrap>
  );
};
