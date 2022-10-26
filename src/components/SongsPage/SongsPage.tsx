import { AllSongs } from "components/AllSongs";
import { Header } from "components/Header";
import { NewTextWrap } from "components/HomePage/HomePage.style";
import { LoadingSpinner } from "components/LoadingSpinner";
import { PageContent } from "components/PageContent";
import { ISong } from "components/SongList/SongList.types";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { SongsPageProps } from "./SongsPage.types";

export const SongsPage: React.FC<SongsPageProps> = () => {
  const [songs, setSongs] = useState<ISong[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");
  const filteredSongs = useMemo(() => {
    return songs.filter((song) => {
      return (
        song.author.toLowerCase().includes(query.toLowerCase()) ||
        song.name.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [query, songs]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/songs/")
      .then((response) => response.json())
      .then((data) => {
        setSongs(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <PageContent>
        <NewTextWrap>
          <Link to="/home">Главная </Link>
          {" / "}
          <Link to="/songs">Все песни</Link>
        </NewTextWrap>
        <div>
          <input
            placeholder="Поиск"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </div>
        {isLoading ? <LoadingSpinner /> : <AllSongs songs={filteredSongs} />}
      </PageContent>
    </>
  );
};
