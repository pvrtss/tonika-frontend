import React from "react";
import { Link } from "react-router-dom";
import { RightChild, SongElement, SongsWrap } from "./AllSongs.style";

import { AllSongsProps } from "./AllSongs.types";

export const AllSongs: React.FC<AllSongsProps> = ({ songs }) => {
  return (
    <SongsWrap>
      {songs.map((song, key) => (
        <Link to={`/song/${song.pk}`} key={key}>
          <SongElement>
            <img
              src={song.cover ? new URL(song.cover).pathname : ""}
              alt="sc"
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
