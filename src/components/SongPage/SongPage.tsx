import { Input } from "@mui/material";
import { SongsContext } from "App";
import { CreateButton } from "components/CreateAuthorPage/CreateAuthorPage.style";
import { Header } from "components/Header";
import { NewTextWrap } from "components/HomePage/HomePage.style";
import { PageContent } from "components/PageContent";
import { MPWrap } from "components/SongsPage/SongsPage.style";
import {
  DeleteButtonWrap,
  StyledTrash,
} from "components/SongStrictCard/SongStrictCard.style";
import { StatusLabel } from "components/StatusLabel";
import { ISong } from "interfaces";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setSongs } from "slices/songSlice";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import {
  DescWrap,
  RightDesc,
  SongContentWrap,
  TextArea,
} from "./SongPage.style";

import { SongPageProps } from "./SongPage.types";

export const SongPage: React.FC<SongPageProps> = () => {
  const userState = useAppSelector((state) => state.user);
  const defaultSong: ISong = {
    pk: -1,
    author: "author",
    chords: "chords",
    name: "name",
    status: "AC",
  };
  const navigate = useNavigate();
  const manage = userState.user?.is_staff;
  const dispatch = useAppDispatch();
  const [change, setChange] = useState(false);
  const path: string = useLocation().pathname;
  const index = Number(path.substring(path.lastIndexOf("/") + 1));
  const cachedSong = useContext(SongsContext)[0].find(
    (song) => song.pk === index
  );
  useEffect(() => {
    fetch(`/api/songs/${song.pk}/`)
      .then((r) => r.json())
      .then((r) => {
        setAuthor(r.author);
        setName(r.name);
        setChords(r.chords);
      });
  }, []);
  const song: ISong = cachedSong ? cachedSong : defaultSong;
  const [name, setName] = useState(
    useContext(SongsContext)[0].find((song) => song.pk === index)?.name
  );
  const [author, setAuthor] = useState(
    useContext(SongsContext)[0].find((song) => song.pk === index)?.name
  );
  const [chords, setChords] = useState(
    useContext(SongsContext)[0].find((song) => song.pk === index)?.name
  );
  const cover = song.cover ? new URL(song.cover).pathname : "/";
  const handleChange = async () => {
    if (change) {
      const data = new FormData();
      data.append("name", name ? name : song.name);
      data.append("author", author ? author : song.author);
      data.append("chords", chords ? chords : song.chords);
      fetch(`/api/songs/${song.pk}/`, { method: "PUT", body: data }).then(
        await fetch("/api/songs/")
          .then((response) => response.json())
          .then((data) => {
            dispatch(setSongs(data));
            navigate(0);
            return data;
          })
      );
    }
    setChange((p) => !p);
  };

  return (
    <>
      <Header />
      <PageContent>
        <NewTextWrap>
          <Link to="/home">Главная</Link> / <Link to="/songs">Все аккорды</Link>{" "}
          /{" "}
          <Link to={path}>
            <b>{song.author}</b> - {song.name}
          </Link>
        </NewTextWrap>
        {manage && (
          <MPWrap>
            <DeleteButtonWrap
              onClick={() => {
                fetch(`/api/songs/${song.pk}/`, { method: "DELETE" }).then(
                  () => {
                    navigate("0");
                    navigate("/songs");
                  }
                );
              }}
            >
              <StyledTrash />
            </DeleteButtonWrap>
            <CreateButton
              style={{ width: "150px", marginTop: "0px" }}
              onClick={handleChange}
            >
              {change ? "Сохранить" : "Изменить"}
            </CreateButton>
            <StatusLabel status={song.status} />
          </MPWrap>
        )}
        <SongContentWrap>
          <DescWrap>
            <img src={cover} alt="song cover"></img>
            <RightDesc>
              <div>
                {change ? (
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  <b>{song.name}</b>
                )}
              </div>
              {change ? (
                <Input
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              ) : (
                <div>{song.author}</div>
              )}
            </RightDesc>
          </DescWrap>
          {change ? (
            <TextArea
              value={chords}
              onChange={(e) => setChords(e.target.value)}
            ></TextArea>
          ) : (
            <p>{song.chords}</p>
          )}
        </SongContentWrap>
      </PageContent>
    </>
  );
};
