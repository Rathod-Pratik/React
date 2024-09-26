import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import NoteState from "./Component/contect/notes/Notestate";

const App = () => {
  return (
    <NoteState>
    <Router>
      <Navbar />
      <div className="block m-auto w-[80%]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </Router>
    </NoteState>
  );
};
export default App;