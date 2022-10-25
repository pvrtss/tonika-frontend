import { PageContent } from "components/PageContent";
import { SongList } from "components/SongList";
import { ISong } from "components/SongList/SongList.types";
import React from "react";

import "./App.css";
import { Header } from "./components/Header";

function App() {

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
      <Header></Header>
        
      <PageContent>
        <SongList songs={SongListMock}/>
      </PageContent>
      
    </>
  );
}

export default App;
