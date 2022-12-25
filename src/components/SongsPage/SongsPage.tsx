import { SongsContext } from "App";
import { AllSongs } from "components/AllSongs";
import { Header } from "components/Header";
import { NewTextWrap } from "components/HomePage/HomePage.style";
import { LoadingSpinner } from "components/LoadingSpinner";
import { PageContent } from "components/PageContent";
import React, { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { SongsPageProps } from "./SongsPage.types";

export const SongsPage: React.FC<SongsPageProps> = () => {
  const songs = useContext(SongsContext)[0];
  const isLoading = useContext(SongsContext)[1];
  const [query, setQuery] = useState<string>("");
  const filteredSongs = useMemo(() => {
    return songs.filter((song) => {
      return (
        song.author.toLowerCase().includes(query.toLowerCase()) ||
        song.name.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [query, songs]);

  return (
    <>
      <Header />
      <PageContent>
        <NewTextWrap>
          <Link to="/home">Главная </Link>
          {" / "}
          <Link to="/songs">Все аккорды</Link>
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
