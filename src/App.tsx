import { HomePage } from "components/HomePage";
import { LoginPage } from "components/LoginPage";
import { ISong } from "interfaces";
import { SongPage } from "components/SongPage";
import { SongsPage } from "components/SongsPage";
import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "utils/hooks";

import "./App.css";
import { setSongs } from "slices/songSlice";
import { setUser } from "slices/userSlice";
import { FavouritesPage } from "components/FavouritesPage";

export const SongsContext = React.createContext<[ISong[], boolean]>([[], true]);

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const songsState = useAppSelector((state) => state.songs);
  const GetSongs = useCallback(() => {
    fetch("/api/songs/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(setSongs(data));
        setIsLoading(false);
      });
  }, [dispatch]);
  const GetUser = useCallback(() => {
    fetch("/api/eauth/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(setUser(data));
      });
  }, [dispatch]);
  useEffect(() => {
    GetUser();
    GetSongs();
  }, [dispatch, GetSongs, GetUser]);

  return (
    <SongsContext.Provider value={[songsState.songs, isLoading]}>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<div>LANDING</div>} />
          <Route path="/songs/" element={<SongsPage />}></Route>
          <Route path="/favourites/" element={<FavouritesPage />}></Route>
          <Route path="/authors/"></Route>
          <Route path="/login/" element={<LoginPage />}></Route>
          <Route path="/song/:id" element={<SongPage />}></Route>
        </Routes>
      </Router>
    </SongsContext.Provider>
  );
}

export default App;
