import { HomePage } from "components/HomePage";
import { SongPage } from "components/SongPage";
import { SongsPage } from "components/SongsPage";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";


function App() {

  return (
      <Router>
          <Routes>
            <Route path="/home" element={<HomePage />}/>
            <Route path="/" element={<div>LANDING</div>}/>
            <Route path="/songs/" element={<SongsPage />}></Route>
            <Route path="/authors/"></Route>
            <Route path="/song/:id" element={<SongPage />}></Route>
          </Routes>
      </Router>
  );
}

export default App;
