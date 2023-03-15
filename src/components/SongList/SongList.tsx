import { SongCard } from "components/SongCard";
import React from "react";
import { Link } from "react-router-dom";
import { useHorizontalScroll } from "utils/useHorizontalScroll";
import { SongsWrap } from "./SongList.style";

import { SongListProps } from "./SongList.types";

export const SongList: React.FC<SongListProps> = ({ songs }) => {
  const scrollRef = useHorizontalScroll();
  return (
    <SongsWrap ref={scrollRef}>
      {songs.map((song, key) => (
        <Link to={`/songs/${song.pk}`} key={key}>
          <SongCard song={song} />
        </Link>
      ))}
    </SongsWrap>
  );
};
