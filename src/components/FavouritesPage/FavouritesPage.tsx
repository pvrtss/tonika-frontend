import { Header } from "components/Header";
import { NewTextWrap } from "components/HomePage/HomePage.style";
import { LoadingSpinner } from "components/LoadingSpinner";
import { PageContent } from "components/PageContent";
import { Input } from "components/SongsPage/SongsPage.style";
import { SongStrictCard } from "components/SongStrictCard";
import { ISong } from "interfaces";
import { favouritesMock } from "mocks";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export const FavouritesPage = () => {
  // const favourites: ISong[] = useAppSelector((state) =>
  //   state.user.user?.favourites ? state.user.user?.favourites : []
  // );

  const [favourites, setFavourites] = useState<ISong[]>([]);
  const isLoading = false;
  useEffect(() => {
    setFavourites(favouritesMock);
  }, []);
  const [query, setQuery] = useState<string>("");
  const filteredSongs = useMemo(() => {
    return favourites.filter((song) => {
      return (
        song.author.toLowerCase().includes(query.toLowerCase()) ||
        song.name.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [query, favourites]);

  return (
    <>
      <Header />
      <PageContent>
        <NewTextWrap>
          <Link to="/tonika-frontend/home">Главная </Link>
          {" / "}
          <Link to="/tonika-frontend/songs">Избранное</Link>
        </NewTextWrap>
        <Input
          top="20px"
          placeholder="Поиск"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></Input>
        <div>
          {isLoading ? (
            <LoadingSpinner />
          ) : filteredSongs.length ? (
            filteredSongs.map((song, key) => (
              <SongStrictCard
                song={song}
                key={key}
                stars
                prestars
              ></SongStrictCard>
            ))
          ) : (
            "Нет избранных"
          )}
        </div>
      </PageContent>
    </>
  );
};
