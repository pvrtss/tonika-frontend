import { Header } from "components/Header";
import { PageContent } from "components/PageContent";
import { SongList } from "components/SongList";
import { ISong } from "components/SongList/SongList.types";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthorsButton, ButtonsWrap, NewTextWrap, SongsButton } from "./HomePage.style";

export const HomePage: React.FC = () => {
  const [newSongs, setNewSongs] = useState<ISong[]>([]);
  
  const GetNewSongs = useCallback(() => {
    fetch("/api/new-songs/")
      .then((response) => response.json())
      .then((data) => {
        setNewSongs(data);
      });
  }, [])

  useEffect(() => {
    GetNewSongs();
  }, [GetNewSongs]);

  return (
    <>
      <Header />
      <PageContent>
        <NewTextWrap>Новинки</NewTextWrap>
        <SongList songs={newSongs} />
        <ButtonsWrap>
          <Link to='/songs'><SongsButton>Все песни</SongsButton></Link>
          <AuthorsButton>Все авторы</AuthorsButton>
        </ButtonsWrap>
      </PageContent>
    </>
  );
};
