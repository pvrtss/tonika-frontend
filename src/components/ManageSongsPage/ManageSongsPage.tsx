import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Header } from "components/Header";
import { NewTextWrap } from "components/HomePage/HomePage.style";
import { PageContent } from "components/PageContent";
import { Input } from "components/SongsPage/SongsPage.style";
import { SongStrictCard } from "components/SongStrictCard";
import moment from "moment";
import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAllSongs } from "slices/allSongsSlice";
import { useAppSelector } from "utils/hooks";

import { ManageSongsPageProps } from "./ManageSongsPage.types";
import { TextField } from "@mui/material";
import { PickerWrapper } from "./ManageSongsPage.style";
import { CreateButton } from "components/CreateAuthorPage/CreateAuthorPage.style";
import { Popup } from "components/Popup";

export const ManageSongsPage: React.FC<ManageSongsPageProps> = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState<string>("");
  const [popup, setPopup] = useState(false);
  const [from, setFrom] = useState<string | null>("");
  const [to, setTo] = useState<string | null>("");
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
        <CreateButton
          style={{ maxWidth: "500px" }}
          onClick={() => {
            setPopup(true);
          }}
        >
          Фильтры
        </CreateButton>
        {popup && (
          <Popup
            onClose={() => {
              setPopup(false);
            }}
          >
            <Input
              top="20px"
              placeholder="Статус"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            ></Input>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <PickerWrapper>
                <DatePicker
                  renderInput={(props) => (
                    <TextField {...props} size={"small"} />
                  )}
                  label="Дата создания (от)"
                  value={from}
                  onChange={(newValue) => {
                    setFrom(newValue);
                  }}
                />
                <DatePicker
                  renderInput={(props) => (
                    <TextField {...props} size={"small"} />
                  )}
                  label="Дата создания (от)"
                  value={to}
                  onChange={(newValue) => {
                    setTo(newValue);
                  }}
                />
              </PickerWrapper>
            </LocalizationProvider>
            <CreateButton
              style={{ maxWidth: "500px" }}
              onClick={() => {
                const fromd = from ? moment(from).format("YYYY-MM-DD") : "";
                const tod = to ? moment(to).format("YYYY-MM-DD") : "";
                console.log(fromd);

                fetch(
                  "/api/all-songs?" +
                    new URLSearchParams({
                      from: fromd,
                      to: tod,
                      status: status,
                    })
                )
                  .then((res) => res.json())
                  .then((res) => {
                    dispatch(setAllSongs(res));
                    setPopup(false);
                  });
              }}
            >
              Отфильтровать
            </CreateButton>
            <button
              style={{
                marginTop: "20px",
                color: "white",
                background: "crimson",
                padding: "5px",
                borderRadius: "6px",
              }}
              onClick={() => {
                fetch("/api/all-songs?")
                  .then((res) => res.json())
                  .then((res) => {
                    dispatch(setAllSongs(res));
                    setPopup(false);
                  });
              }}
            >
              Сбросить фильтры
            </button>
          </Popup>
        )}

        <div style={{ marginBottom: "20px" }}>
          {filteredSongs.length ? (
            filteredSongs.map((song, key) => (
              <Link to={`/songs/${song.pk}`} key={key}>
                <SongStrictCard song={song} manage></SongStrictCard>
              </Link>
            ))
          ) : (
            <div style={{ marginTop: "20px" }}>Нет песен</div>
          )}
        </div>
      </PageContent>
    </>
  );
};
