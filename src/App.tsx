import { HomePage } from "components/HomePage";
import { LoginPage } from "components/LoginPage";
import { ISong } from "interfaces";
import { SongPage } from "components/SongPage";
import { SongsPage } from "components/SongsPage";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<div>LANDING</div>} />
          <Route path="/songs/" element={<SongsPage />}></Route>
          <Route path="/songs/create" element={<CreateSongPage />}></Route>
          <Route path="/manage/songs/" element={<ManageSongsPage />}></Route>
          <Route path="/favourites/" element={<FavouritesPage />}></Route>
          <Route path="/manage/" element={<ManagePage />}></Route>
          <Route path="/authors/" element={<AuthorsPage />}></Route>
          <Route path="/authors/create" element={<CreateAuthorPage />}></Route>
          <Route path="/login/" element={<LoginPage />}></Route>
          <Route path="/songs/:id" element={<SongPage />}></Route>
        </Routes>
      </Router>
    </SongsContext.Provider>
  );
}

export default App;
