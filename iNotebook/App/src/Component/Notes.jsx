import React from "react";
import { useContext } from "react";
import contextValue from './contect/notes/noteContect'
import NoteItem from "./NoteItem";

const Notes = () => {
    const context=useContext(contextValue);
    const {notes,setNotes}=context;
  return (
    <div>
      <h2 className="text-white">your notes</h2>
      {notes.map((note) => {
         return <NoteItem title={note.title} discription={note.discription} />;
      })}
    </div>
  );
};

export default Notes;
