import {
  CreateButton,
  Form,
} from "components/CreateAuthorPage/CreateAuthorPage.style";
import { Header } from "components/Header";
import { NewTextWrap } from "components/HomePage/HomePage.style";
import { PageContent } from "components/PageContent";
import { Input } from "components/SongsPage/SongsPage.style";
import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { CreateSongPageProps } from "./CreateSongPage.types";

export const CreateSongPage: React.FC<CreateSongPageProps> = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [chords, setChords] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const handleClick = useCallback(() => {
    const cover = input.current?.files ? input.current.files[0] : "";
    const data = new FormData();
    data.append("name", name);
    data.append("author", author);
    data.append("chords", chords);
    console.log(cover);
    data.append("cover", cover ? cover : "");
    fetch("/api/songs/", {
      method: "POST",
      body: data,
    }).then((res) => {
      if (res.status === 201) alert("created");
    });
  }, [name, author, chords]);
  return (
    <>
      <Header />
      <PageContent>
        <NewTextWrap>
          <Link to="/home">Главная </Link>
          {" / "}
          <Link to="/songs/">Аккорды</Link>
          {" / "}
          <Link to="/songs/create">Добавить песню</Link>
        </NewTextWrap>
        <Form>
          <Input
            top="20px"
            placeholder="Название"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>
          <Input
            top="20px"
            placeholder="Исполнитель"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></Input>
          <Input
            top="20px"
            placeholder="Аккорды"
            value={chords}
            onChange={(e) => setChords(e.target.value)}
          ></Input>
          <Input
            top="20px"
            placeholder="Обложка"
            type="file"
            ref={input}
          ></Input>
          <CreateButton onClick={handleClick}>Добавить</CreateButton>
        </Form>
      </PageContent>
    </>
  );
};
