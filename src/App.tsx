import { HomePage } from "components/HomePage";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";


function App() {

  return (
      <Router>
          <Routes>
            <Route path="/home" element={<HomePage />}/>
            <Route path="/" element={<div>LANDING</div>}/>

          </Routes>
      </Router>
  );
}

export default App;
