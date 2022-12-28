import { SongsContext } from "App";
import { AllSongs } from "components/AllSongs";
import { CreateButton } from "components/CreateAuthorPage/CreateAuthorPage.style";
import { Header } from "components/Header";
import { NewTextWrap } from "components/HomePage/HomePage.style";
import { LoadingSpinner } from "components/LoadingSpinner";
import { PageContent } from "components/PageContent";
import React, { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Input, MPWrap } from "./SongsPage.style";

import { SongsPageProps } from "./SongsPage.types";

export const SongsPage: React.FC<SongsPageProps> = () => {
  const songs = useContext(SongsContext)[0];
  const isLoading = useContext(SongsContext)[1];
  const [query, setQuery] = useState<string>("");
  const filteredSongs = useMemo(() => {
    return songs.filter((song) => {
      return (
        song.status === "AC" &&
        (song.author.toLowerCase().includes(query.toLowerCase()) ||
          song.name.toLowerCase().includes(query.toLowerCase()))
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
          <Input
            top="20px"
            placeholder="Поиск"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></Input>
          <Link to={"/songs/create"}>
            <CreateButton style={{ maxWidth: "500px" }}>
              Добавить песню
            </CreateButton>
          </Link>
        </div>

        {isLoading ? <LoadingSpinner /> : <AllSongs songs={filteredSongs} />}
      </PageContent>
    </>
  );
};
