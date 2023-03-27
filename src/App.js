import React from "react";
import "./App.css";
import Home from "./components/home/home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
