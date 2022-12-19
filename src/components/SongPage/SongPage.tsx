import { SongsContext } from "App";
import { Header } from "components/Header";
import { NewTextWrap } from "components/HomePage/HomePage.style";
import { PageContent } from "components/PageContent";
import { ISong } from "components/SongList/SongList.types";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { DescWrap, RightDesc, SongContentWrap } from "./SongPage.style";

import { SongPageProps } from "./SongPage.types";

export const SongPage: React.FC<SongPageProps> = () => {
  const defaultSong: ISong = {
    'pk': -1,
    'author': 'author',
    'chords': 'chords',
    'name': 'name',
  }
  const path: string = useLocation().pathname;
  const index = Number(path.substring(path.lastIndexOf("/") + 1));
  const cachedSong = useContext(SongsContext)[0].find(song => song.pk === index);
  const song: ISong = cachedSong ? cachedSong : defaultSong;

  return (
    <>
      <Header />
      <PageContent>
        <NewTextWrap>
          <Link to="/songs">Все песни</Link> /{" "}
          <Link to={path}>
            <b>{song.author}</b> - {song.name}
          </Link>
        </NewTextWrap>
        <SongContentWrap>
          <DescWrap>
            <img
              src={song.cover}
              alt="song cover"
            ></img>
            <RightDesc>
              <div>
                <b>{song.name}</b>
              </div>
              <div>{song.author}</div>
            </RightDesc>
          </DescWrap>
          <p>{song.chords}</p>
        </SongContentWrap>
      </PageContent>
    </>
  );
};
