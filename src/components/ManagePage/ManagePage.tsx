import { Header } from "components/Header";
import { NewTextWrap } from "components/HomePage/HomePage.style";
import { ManagePanel } from "components/ManagePanel";
import { PageContent } from "components/PageContent";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "utils/hooks";

export const ManagePage = () => {
  const navigate = useNavigate();
  const userState = useAppSelector((state) => state.user);
  useEffect(() => {
    if (!userState.user?.is_staff) {
      navigate("/tonika-frontend/home");
    }
  }, [userState, navigate]);

  return (
    <>
      <Header />
      <PageContent>
        <NewTextWrap>
          <Link to="/tonika-frontend/home">Главная</Link>
          {" / "}
          <Link to="/tonika-frontend/manage">Управление</Link>
        </NewTextWrap>
        <ManagePanel />
      </PageContent>
    </>
  );
};
