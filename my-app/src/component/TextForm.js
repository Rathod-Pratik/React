import React from "react";
import { useState } from "react";

export default function Text_editor(props) {
  const [text, setText] = useState("NewText");
  function changetext(event) {
      console.log("you click this btn")
     setText(event.target.value);
  }
  function touppercase() {
    let NewText=text.toUpperCase();
    setText(NewText);
  }
  function tolowercase() {
    let NewText=text.toLowerCase();
    setText(NewText);
  }
  return (
    <>
    <div className="container">

      <h2>{props.title}</h2>
      <div class="mb-3">
        <textarea
          className="form-control"
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
          </div>
      </div>
      <div className="container">
        <h2>Count</h2>
        <p>there are {text.split(" ").length} Words and {text.length} character in this paragraph <br/> It takes {0.25 * text.split(" ").length}seconds to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
