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
      <h2>{props.title}</h2>
      <div class="mb-3">
        <textarea
          className="form-control"
          rows="8"
          value={text}
          onChange={changetext}
        ></textarea>
        <button className="btn btn-primary m-2" onClick={touppercase}>
          toUppercase
        </button>
        <button className="btn btn-primary m-2" onClick={tolowercase}>
          tolowercase
        </button>
      </div>
    </>
  );
}
