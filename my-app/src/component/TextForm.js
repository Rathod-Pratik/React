import React from "react";
import { useState } from "react";

export default function Text_editor(props) {
  const [text, setText] = useState("NewText");

  const [isBold, setIsBold] = useState(false);
  const [isitalic, setitalic] = useState(false);

  function boldText() {
    setIsBold(!isBold);
  }

  function italicText() {
    setitalic(!isitalic);
  }

  function changetext(event) {
    console.log("you click this btn");
    setText(event.target.value);
  }

  function touppercase() {
    let NewText = text.toUpperCase();
    setText(NewText);
  }

  function tolowercase() {
    let NewText = text.toLowerCase();
    setText(NewText);
  }

  function clearText() {
    let NewText = "";
    setText(NewText);
  }

  return (
    <>
      <div className="container">
        <h2>{props.title}</h2>
        <div class="mb-3">
          <textarea
            className={`form-control ${isBold ? "bold" : ""} ${
              isitalic ? "italic" : ""}`}
            rows="8"
            value={text}
            onChange={changetext}
          ></textarea>
          <button className="btn btn-primary m-2" onClick={touppercase}>
            ToUppercase
          </button>
          <button className="btn btn-primary m-2" onClick={tolowercase}>
            Tolowercase
          </button>
          <button className="btn btn-primary m-2" onClick={clearText}>
            Clear text
          </button>
          <button className="btn btn-primary m-2" onClick={boldText}>
            Bold text
          </button>
          <button className="btn btn-primary m-2" onClick={italicText}>
            italic text
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Count</h2>
        <p>
          there are {text.split(" ").length - 1} Words and {text.length}{" "}
          character in this paragraph <br /> It takes{" "}
          {0.25 * text.split(" ").length - 0.25}seconds to read
        </p>
        <h2>Preview</h2>
        <p className={` ${isBold ? "bold" : ""} ${
              isitalic ? "italic" : ""}`}>{text}</p>
      </div>
    </>
  );
}
