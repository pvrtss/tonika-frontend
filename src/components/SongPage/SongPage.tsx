import { Header } from "components/Header";
import { NewTextWrap } from "components/HomePage/HomePage.style";
import { PageContent } from "components/PageContent";
import { ISong } from "components/SongList/SongList.types";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { DescWrap, RightDesc, SongContentWrap } from "./SongPage.style";

import { SongPageProps } from "./SongPage.types";

export const SongPage: React.FC<SongPageProps> = () => {
  const SongListMock: ISong[] = [
    {
      pk: 1,
      name: "Дождь",
      author: "ДДТ",
      chords: "(АККОРДЫ 1)",
    },
    {
      pk: 2,
      name: "Smells Like Teen Spirit",
      author: "Nirvana",
      chords: "(АККОРДЫ 2)",
    },
    {
      pk: 3,
      name: "Seven Nation Army",
      author: "The White Stripes",
      chords: "(АККОРДЫ 3)",
    },
    {
      pk: 1,
      name: "Дождь",
      author: "ДДТ",
      chords: "(АККОРДЫ)",
    },
    {
      pk: 2,
      name: "Smells Like Teen Spirit",
      author: "Nirvana",
      chords: "(АККОРДЫ)",
    },
    {
      pk: 3,
      name: "Seven Nation Army",
      author: "The White Stripes",
      chords: "(АККОРДЫ)",
    },
    {
      pk: 1,
      name: "Дождь",
      author: "ДДТ",
      chords: "(АККОРДЫ)",
    },
    {
      pk: 2,
      name: "Smells Like Teen Spirit",
      author: "Nirvana",
      chords: "(АККОРДЫ)",
    },
    {
      pk: 3,
      name: "Seven Nation Army",
      author: "The White Stripes",
      chords: "(АККОРДЫ)",
    },
    {
      pk: 1,
      name: "Дождь",
      author: "ДДТ",
      chords: "(АККОРДЫ)",
    },
    {
      pk: 2,
      name: "Smells Like Teen Spirit",
      author: "Nirvana",
      chords: "(АККОРДЫ)",
    },
    {
      pk: 3,
      name: "Seven Nation Army",
      author: "The White Stripes",
      chords: "(АККОРДЫ)",
    },
  ];
  const path: string = useLocation().pathname;
  const index = Number(path.substring(path.lastIndexOf("/") + 1));
  const song = SongListMock[index - 1];

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
              src={require(`../../assets/cover_${song.pk.toString()}.jpg`)}
              alt="song cover"
            ></img>
            <RightDesc>
              <div>
                <b>{song.author}</b>
              </div>
              <div>{song.name}</div>
            </RightDesc>
          </DescWrap>
          <p>{song.chords}</p>
        </SongContentWrap>
      </PageContent>
    </>
  );
};
