import { Header } from "components/Header";
import { NewTextWrap } from "components/HomePage/HomePage.style";
import { PageContent } from "components/PageContent";
import { CardTextWrap } from "components/SongCard/SongCard.style";
import { ISong } from "interfaces";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useAppSelector } from "utils/hooks";
import {
  LeftChild,
  SongStrictCardWrap,
  StarF,
  StarO,
} from "./FavouritesPage.style";
import { SongStrictCardProps } from "./FavouritesPage.types";

const SongStrictCard: React.FC<SongStrictCardProps> = ({ song }) => {
  const [isFavourite, setIsFavourite] = useState(true);
  const handleClick = () => {
    if (!isFavourite) {
      fetch("/api/favourites/add/", {
        method: "POST",
        body: JSON.stringify({ song_pk: song.pk }),
      })
        .then((r) => r.json())
        .then((d) => console.log(d));
    } else {
      fetch("/api/favourites/delete/", {
        method: "DELETE",
        body: JSON.stringify({ song_pk: song.pk }),
      })
        .then((r) => r.json())
        .then((d) => console.log(d));
    }
    setIsFavourite((ps) => !ps);
  };
  return (
    <SongStrictCardWrap>
      <LeftChild>
        <img src={song.cover} alt="song cover"></img>
        <CardTextWrap>
          <div>
            <b>{song.name}</b>
          </div>
          <div>{song.author}</div>
        </CardTextWrap>
      </LeftChild>
      {isFavourite ? (
        <StarF onClick={handleClick} />
      ) : (
        <StarO onClick={handleClick} />
      )}
    </SongStrictCardWrap>
  );
};

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
