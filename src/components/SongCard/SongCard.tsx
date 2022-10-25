import React from "react";
import { CardTextWrap, CardWrap } from "./SongCard.style";

import { SongCardProps } from "./SongCard.types";

export const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <CardWrap>
      <img
        src={require(`../../assets/cover_${song.pk.toString()}.jpg`)}
        alt="song cover"
      ></img>
      <CardTextWrap>
        <div>
          <b>{song.author}</b>
        </div>
        <div>{song.name}</div>
      </CardTextWrap>
    </CardWrap>
  );
};
