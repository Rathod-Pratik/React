import noteContect from "./noteContect";

const NoteState=(props)=>{
    const state={
        "Name":"Rathod Pratik",
        "Class":"A"
    }
return(
    <noteContect.Provider value={state}>
        {props.children}
    </noteContect.Provider>
)
}

export default NoteState;