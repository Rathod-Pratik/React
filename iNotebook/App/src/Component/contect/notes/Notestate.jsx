import { useState } from "react";
import NoteContext from "./noteContect"; // Correct the typo here

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "66f2bbd39502c3df591d324f",
      "user": "66ed761005f8a2196f7750fc",
      "title": "My title",
      "discription": "Please wake up early", // fixed typo in "description"
      "tag": "Personal",
      "date": "2024-09-24T13:17:07.737Z",
      "__v": 0
    },
    {
      "_id": "66f2bbd39502c3df591d3251",
      "user": "66ed761005f8a2196f7750fc",
      "title": "My title",
      "discription": "Please wake up early", // fixed typo in "description"
      "tag": "Personal",
      "date": "2024-09-24T13:17:07.873Z",
      "__v": 0
    }
  ];
  
  const [notes, setNotes] = useState(notesInitial); // Notice capitalization in setNotes

  return (
    <NoteContext.Provider value={{ notes, setNotes }}> {/* Correct the context name */}
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
