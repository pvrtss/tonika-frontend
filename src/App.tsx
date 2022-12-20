import { HomePage } from "components/HomePage";
import { LoginPage } from "components/LoginPage";
import { ISong } from "components/SongList/SongList.types";
import { SongPage } from "components/SongPage";
import { SongsPage } from "components/SongsPage";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { setDataAction, useData } from "slices/songSlice";

import "./App.css";

export const SongsContext = React.createContext<[ISong[], boolean]>([[], true]);

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch()
  const data = useData()
  const GetSongs = useCallback(() => {
    fetch("/api/songs/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(setDataAction(data));
        setIsLoading(false);
      });
  }, [dispatch]);
  useEffect(() => {
    GetSongs();
  }, [dispatch, GetSongs]);

  return (
    <SongsContext.Provider value={[data, isLoading]}>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<div>LANDING</div>} />
          <Route path="/songs/" element={<SongsPage />}></Route>
          <Route path="/authors/"></Route>
          <Route path="/login/" element={<LoginPage />}></Route>
          <Route path="/song/:id" element={<SongPage />}></Route>
        </Routes>
      </Router>
    </SongsContext.Provider>
  );
}

export default App;
