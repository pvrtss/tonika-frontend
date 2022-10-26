import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { RightChild, SongElement, SongsWrap } from "./AllSongs.style";

import { AllSongsProps } from "./AllSongs.types";

export const AllSongs: React.FC<AllSongsProps> = ({ songs }) => {
  return (
    <SongsWrap>
      {songs.map((song, key) => (
        <Link to={`/song/${song.pk}`}>
          <SongElement key={key}>
            <img
              src={require(`../../assets/cover_${song.pk.toString()}.jpg`)}
              alt="song cover"
            ></img>
            <RightChild>
              <b>{song.author}</b> - {song.name}
            </RightChild>
          </SongElement>
        </Link>
      ))}
    </SongsWrap>
  );
};
