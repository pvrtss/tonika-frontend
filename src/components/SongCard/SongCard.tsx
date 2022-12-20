import React from "react";
import { CardTextWrap, CardWrap } from "./SongCard.style";

import { SongCardProps } from "./SongCard.types";

export const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <CardWrap>
      <img
        src={song.cover}
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
