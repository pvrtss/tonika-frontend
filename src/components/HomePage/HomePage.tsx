import { Header } from "components/Header";
import { HomePanel } from "components/HomePanel";
import { PageContent } from "components/PageContent";
import { SongList } from "components/SongList";
import { MainWrap } from "components/SongPage/SongPage.style";
import { ISong } from "interfaces";
import React, { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "utils/hooks";
import { NewTextWrap } from "./HomePage.style";

export const HomePage: React.FC = () => {
  const [newSongs, setNewSongs] = useState<ISong[]>([]);
  const userState = useAppSelector((state) => state.user);
  const GetNewSongs = useCallback(() => {
    fetch("/api/new-songs/")
      .then((response) => response.json())
      .then((data) => {
        setNewSongs(data);
      });
  }, []);

  useEffect(() => {
    GetNewSongs();
  }, [GetNewSongs]);

  return (
    <>
      <Header />
      <PageContent>
        <NewTextWrap>Главная</NewTextWrap>
        <MainWrap>Новинки</MainWrap>
        <SongList songs={newSongs} />
        <HomePanel
          manager={userState.user?.is_staff}
          user={userState.user ? true : false}
        />
      </PageContent>
    </>
  );
};
