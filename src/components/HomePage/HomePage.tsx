import { Header } from "components/Header";
import { PageContent } from "components/PageContent";
import { SongList } from "components/SongList";
import { ISong } from "components/SongList/SongList.types";
import React from "react";
import { NewTextWrap } from "./HomePage.style";

export const HomePage: React.FC = () => {
  const SongListMock: ISong[] = [
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
  return (
    <>
      <Header />
      <PageContent>
        <NewTextWrap>Новинки</NewTextWrap>
        <SongList songs={SongListMock} />
      </PageContent>
    </>
  );
};
