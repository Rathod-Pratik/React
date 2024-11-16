import React, { useEffect } from "react";
import { useContext } from "react";
import contextValue from "./contect/notes/noteContect";
import NoteItem from "./NoteItem";
import AddNote from "./addNote";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  let navigation = useNavigate();
  const context = useContext(contextValue);
  const { notes, getnotes, editNote } = context;

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    setIsOpen(!isOpen);
    e.preventDefault();
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null); // Create a reference for the button

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const updatenote = (CurrentNote) => {
    ref.current.click(); // This will trigger the button click
    setNote({
      id: CurrentNote._id,
      edescription: CurrentNote.description,
      etag: CurrentNote.tag,
      etitle: CurrentNote.title,
    });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getnotes();
    } else {
      navigation("/login");
    }
  }, []);
  const value = localStorage.getItem("name");
  return (
    <>
      <h1 className="text-black text-center mt-8 text-3xl">
        Account: {`${value}`}
      </h1>
      <AddNote />
    
    </>
  );
};

export default Notes;
