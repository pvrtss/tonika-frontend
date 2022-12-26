import { Header } from "components/Header";
import { NewTextWrap } from "components/HomePage/HomePage.style";
import { PageContent } from "components/PageContent";
import { Input } from "components/SongsPage/SongsPage.style";
import { SongStrictCard } from "components/SongStrictCard";
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "utils/hooks";

import { ManageSongsPageProps } from "./ManageSongsPage.types";

export const ManageSongsPage: React.FC<ManageSongsPageProps> = () => {
  const allSongs = useAppSelector((state) => state.allSongs).songs;
  const [query, setQuery] = useState<string>("");
  const filteredSongs = useMemo(() => {
    return allSongs.filter((song) => {
      return (
        song.author.toLowerCase().includes(query.toLowerCase()) ||
        song.name.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [query, allSongs]);
  return (
    <>
      <Header />
      <PageContent>
        <NewTextWrap>
          <Link to="/home">Главная </Link>
          {" / "}
          <Link to="/manage">Управление</Link>
          {" / "}
          <Link to="/manage/songs">Аккорды</Link>
        </NewTextWrap>
        <Input
          top="20px"
          placeholder="Поиск"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></Input>
        <div>
          {filteredSongs.length ? (
            filteredSongs.map((song, key) => (
              <SongStrictCard song={song} key={key} manage></SongStrictCard>
            ))
          ) : (
            <div style={{ marginTop: "20px" }}>Нет песен</div>
          )}
        </div>
      </PageContent>
    </>
  );
};
