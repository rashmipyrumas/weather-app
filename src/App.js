import React from "react";
import "./App.css";
import Home from "./components/home/home";
import Days from "./components/home/daysChart";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/daysChart" exact element={<Days/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
