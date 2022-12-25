import { Header } from "components/Header";
import { NewTextWrap } from "components/HomePage/HomePage.style";
import { PageContent } from "components/PageContent";
import { SongStrictCard } from "components/SongStrictCard";
import { ISong } from "interfaces";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useAppSelector } from "utils/hooks";


export const FavouritesPage = () => {
  // const favourites: ISong[] = useAppSelector((state) =>
  //   state.user.user?.favourites ? state.user.user?.favourites : []
  // );
  const [favourites, setFavourites] = useState<ISong[]>([]);
  useEffect(() => {
    fetch("/api/favourites/")
      .then((response) => response.json())
      .then((data) => {
        setFavourites(data);
      });
  }, []);

  return (
    <>
      <Header />
      <PageContent>
        <NewTextWrap>
          <Link to="/home">Главная </Link>
          {" / "}
          <Link to="/songs">Избранное</Link>
        </NewTextWrap>
        <div>
          {favourites.length
            ? favourites.map((song, key) => (
                <SongStrictCard song={song} key={key}></SongStrictCard>
              ))
            : "Нет избранных"}
        </div>
      </PageContent>
    </>
  );
};
