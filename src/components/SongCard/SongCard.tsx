import React from "react";
import { CardTextWrap, CardWrap } from "./SongCard.style";

import { SongCardProps } from "./SongCard.types";

export const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <CardWrap>
      <img
        src={'http://'+window.location.hostname+':8000'+song.cover}
        alt="song cover"
      ></img>
      <CardTextWrap>
        <div>
          <b>{song.name}</b>
        </div>
        <div>{song.author}</div>
      </CardTextWrap>
    </CardWrap>
  );
};
