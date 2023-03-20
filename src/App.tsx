import { HomePage } from "components/HomePage";
import { LoginPage } from "components/LoginPage";
import { ISong } from "interfaces";
import { SongPage } from "components/SongPage";
import { SongsPage } from "components/SongsPage";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useAppDispatch } from "utils/hooks";

import "./App.css";
import { setUser } from "slices/userSlice";
import { FavouritesPage } from "components/FavouritesPage";
import { ManagePage } from "components/ManagePage";
import { CreateAuthorPage } from "components/CreateAuthorPage";
import { AuthorsPage } from "components/AuthorsPage";
import { CreateSongPage } from "components/CreateSongPage";
import { ManageSongsPage } from "components/ManageSongsPage";
import { allSongs, userMock } from "mocks";
import { setAllSongs } from "slices/allSongsSlice";

export const SongsContext = React.createContext<[ISong[], boolean]>([
  allSongs,
  true,
]);

function App() {
  const isLoading: boolean = false;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setUser(userMock));
    dispatch(setAllSongs(allSongs));
  }, [dispatch]);

  return (
    <SongsContext.Provider value={[allSongs, isLoading]}>
      <Router>
        <Routes>
          <Route path="/tonika-frontend/home" element={<HomePage />} />
          <Route
            path="/tonika-frontend"
            element={<Navigate to="/tonika-frontend/home" replace />}
          />
          <Route path="/tonika-frontend/songs/" element={<SongsPage />}></Route>
          <Route
            path="/tonika-frontend/songs/create"
            element={<CreateSongPage />}
          ></Route>
          <Route
            path="/tonika-frontend/manage/songs"
            element={<ManageSongsPage />}
          ></Route>
          <Route
            path="/tonika-frontend/favourites"
            element={<FavouritesPage />}
          ></Route>
          <Route
            path="/tonika-frontend/manage"
            element={<ManagePage />}
          ></Route>
          <Route
            path="/tonika-frontend/authors/"
            element={<AuthorsPage />}
          ></Route>
          <Route
            path="/tonika-frontend/authors/create"
            element={<CreateAuthorPage />}
          ></Route>
          <Route path="/tonika-frontend/login" element={<LoginPage />}></Route>
          <Route
            path="/tonika-frontend/songs/:id"
            element={<SongPage />}
          ></Route>
        </Routes>
      </Router>
    </SongsContext.Provider>
  );
}

export default App;
