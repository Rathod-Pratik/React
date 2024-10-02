import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import About from "./Component/About";
import NoteState from "./Component/contect/notes/Notestate";
import Alert from "./Component/Alert";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const[alert,setalert]=useState(null);
  const showAlert=(message,color,bgcolor)=>{
   setalert({
    message:message,
    color:color,
    bgcolor:bgcolor
   })
   setTimeout(() => {
    setalert(null);
   }, 1500);
  }
  return (
    <NoteState showAlert={showAlert} >
    <Router>
      <Analytics/>
      <Navbar />
      <Alert alert={alert}/>
      {/* <div className="block m-auto w-[80%]"> */}
      <Routes>
        <Route path="/" element={<Home showAlert={showAlert} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login showAlert={showAlert} />} />
        <Route path="/signup" element={<SignUp showAlert={showAlert} />} />
      </Routes>
      {/* </div> */}
    </Router>
    </NoteState>
  );
};
export default App;