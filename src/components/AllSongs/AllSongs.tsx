import { SongStrictCard } from "components/SongStrictCard";
import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "utils/hooks";
import { SongsWrap } from "./AllSongs.style";

import { AllSongsProps } from "./AllSongs.types";

export const AllSongs: React.FC<AllSongsProps> = ({ songs }) => {
  const userState = useAppSelector((state) => state.user);

  const favourites = userState.user?.favourites
    ? userState.user?.favourites
    : [];

  // useEffect(() => {
  //   fetch("api/favourites/")
  //     .then((res) => res.json())
  //     .then((data) => setFavourites(data));
  // }, []);
  return (
    <SongsWrap>
      {songs.map((song, key) => (
        <Link to={`/songs/${song.pk}`} key={key}>
          <SongStrictCard
            song={song}
            fromViewset
            stars
            favorites={favourites}
          ></SongStrictCard>
        </Link>
      ))}
    </SongsWrap>
  );
};
