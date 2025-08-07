import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Layouts from "./components/Layouts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
