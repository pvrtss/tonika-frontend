import { CreateButton } from "components/CreateAuthorPage/CreateAuthorPage.style";
import { Header } from "components/Header";
import { NewTextWrap } from "components/HomePage/HomePage.style";
import { LoadingSpinner } from "components/LoadingSpinner";
import { PageContent } from "components/PageContent";
import { Input } from "components/SongsPage/SongsPage.style";
import {
  DeleteButtonWrap,
  StyledTrash,
} from "components/SongStrictCard/SongStrictCard.style";
import { IAuthor } from "interfaces";
import { allAuthors } from "mocks";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  AuthorCard,
  AuthorCards,
  AuthorDesc,
  AuthorInfo,
  AuthorName,
} from "./AuthorsPage.style";

import { AuthorsPageProps } from "./AuthorsPage.types";

export const AuthorsPage: React.FC<AuthorsPageProps> = ({
  manage,
  onDelete,
}) => {
  const [authors, setAuthors] = useState<IAuthor[]>([]);
  const isLoading = false;
  useEffect(() => {
    setAuthors(allAuthors);
  }, []);
  const [query, setQuery] = useState<string>("");
  const filteredAuthors = useMemo(() => {
    return authors.filter((a) => {
      return a.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [query, authors]);
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onDelete) onDelete(e);
  };

  return (
    <>
      <Header />
      <PageContent>
        <NewTextWrap>
          <Link to="/tonika-frontend/home">Главная </Link>
          {" / "}
          <Link to="/tonika-frontend/authors">Авторы</Link>
        </NewTextWrap>
        <Input
          top="20px"
          placeholder="Поиск"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></Input>
        <Link to={"/tonika-frontend/authors/create"}>
          <CreateButton style={{ maxWidth: "500px" }}>
            Добавить автора
          </CreateButton>
        </Link>
        {isLoading ? (
          <LoadingSpinner />
        ) : filteredAuthors.length ? (
          <AuthorCards>
            {filteredAuthors.map((a, key) => (
              <>
                <AuthorCard key={key}>
                  <AuthorInfo>
                    <AuthorName>{a.name}</AuthorName>{" "}
                    <AuthorDesc>{a.description}</AuthorDesc>
                  </AuthorInfo>
                  {manage && (
                    <DeleteButtonWrap onClick={handleDelete}>
                      <StyledTrash />
                    </DeleteButtonWrap>
                  )}
                </AuthorCard>
              </>
            ))}
          </AuthorCards>
        ) : (
          <div style={{ marginTop: "20px" }}>Нет авторов</div>
        )}
      </PageContent>
    </>
  );
};
