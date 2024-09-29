import { useState } from "react";
import NoteContext from "./noteContect"; // Correct the typo here

const NoteState = (props) => {
  const noteinitial=[];
  const [notes, setNotes] = useState(noteinitial); // Notice capitalization in setNotes
  const host ="  http://localhost:5000"
  //get all notes
  const getnotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZlZDc2MTAwNWY4YTIxOTZmNzc1MGZjIn0sImlhdCI6MTcyNzA3MDk3NX0.2YnZ9ZHuMzm9IgHx3dvqdQzzheUh0RoUHY7qnvD5BxE'
        }
      });
  
      const json = await response.json(); // Make sure to await the response
  
      console.log(json);
      setNotes(json); // Update the notes state
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };
  

  //Add a note
  const addNote=async(title,description,tag)=>{

    const response=await fetch(`${host}/api/notes/addnotes`,{
      method:'POST',
      headers:{
        'content-Type':'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZlZDc2MTAwNWY4YTIxOTZmNzc1MGZjIn0sImlhdCI6MTcyNzA3MDk3NX0.2YnZ9ZHuMzm9IgHx3dvqdQzzheUh0RoUHY7qnvD5BxE'
      },
      body:JSON.stringify({title,description,tag})
    });

    const json=await response.json();

   const note={
    _id: json._id,
    // "_id": "66f2bbd39502c3df591d325189",
    // "user": "66ed761005f8a2196f7750fc00",
      "title":title,
      "description":description,
      "tag":tag
    }
    setNotes(notes.concat(note));
  }
  //edit a note
  const editNote=async(id,title,description,tag)=>{
    const response=await fetch(`${host}/api/notes/updatenode/${id}`,{
      method:'PUT',
      headers:{
        'content-Type':'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZlZDc2MTAwNWY4YTIxOTZmNzc1MGZjIn0sImlhdCI6MTcyNzA3MDk3NX0.2YnZ9ZHuMzm9IgHx3dvqdQzzheUh0RoUHY7qnvD5BxE'
      },
      body:JSON.stringify({title,description,tag})
    });

    const json= response.json();
    let newNotes = JSON.parse(JSON.stringify(notes))
    //logic to edit in client
    for(let index=0; index<newNotes.length; index++){
      const element =newNotes[index];

      if(element._id===id){
        element.title=title;
        element.description=description;
        element.tag=tag

        break;
      }
    }
    setNotes(newNotes);
  }
  //delete a note
  const deleteNode = async (id) => {
    // Optimistically remove the note from UI (update state first)
    const newNotes = notes.filter((note) => note._id !== id);
    const previousNotes = notes; // Save the current state in case we need to rollback
    setNotes(newNotes); // Update the state immediately to reflect the deletion
  
    try {
      // Send DELETE request to the server
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZlZDc2MTAwNWY4YTIxOTZmNzc1MGZjIn0sImlhdCI6MTcyNzA3MDk3NX0.2YnZ9ZHuMzm9IgHx3dvqdQzzheUh0RoUHY7qnvD5BxE' // Add your token here
        },
      });
  
      const json = await response.json();
      console.log(json);
  
      // If the delete operation fails (status is not 200), restore the original notes
      if (response.status !== 200) {
        console.error('Failed to delete the note:', json.error);
        alert('Failed to delete the note');
        setNotes(previousNotes); // Roll back to previous state
      }
    } catch (error) {
      console.error('Error occurred while deleting the note:', error);
      alert('Error occurred while deleting the note');
      setNotes(previousNotes); // Roll back to previous state in case of failure
    }
  };
  
  return (
    <NoteContext.Provider value={{ notes,editNote, setNotes,addNote,deleteNode,getnotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
