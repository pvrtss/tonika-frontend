import { Header } from "components/Header";
import { NewTextWrap } from "components/HomePage/HomePage.style";
import { PageContent } from "components/PageContent";
import { Input } from "components/SongsPage/SongsPage.style";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { CreateButton, Form } from "./CreateAuthorPage.style";

import { CreateAuthorPageProps } from "./CreateAuthorPage.types";

export const CreateAuthorPage: React.FC<CreateAuthorPageProps> = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const handleClick = useCallback(() => {
    const data = new FormData();
    data.append("name", name);
    data.append("description", desc);
    fetch("/api/authors/", {
      method: "POST",
      body: data,
    }).then((res) => {
      if (res.status === 201) alert("created");
    });
  }, [name, desc]);
  return (
    <>
      <Header />
      <PageContent>
        <NewTextWrap>
          <Link to="/home">Главная </Link>
          {" / "}
          <Link to="/authors/">Авторы</Link>
          {" / "}
          <Link to="/authors/create">Создать автора</Link>
        </NewTextWrap>
        <Form>
          <Input
            top="20px"
            placeholder="Исполнитель"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>
          <Input
            top="20px"
            placeholder="Описание"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></Input>
          <CreateButton onClick={handleClick}>Создать</CreateButton>
        </Form>
      </PageContent>
    </>
  );
};
