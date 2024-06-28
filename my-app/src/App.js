import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import { useState } from "react";
function App() {
  const [mode, setmode] = useState('light');
  const [Text, setText] = useState('Dark');
  function togglemode() {
    if(mode==='light'){
      setmode('dark');
      setText('Light');
      document.body.style.backgroundColor='gray';
    }
    else{
      setmode('light');
      setText('Dark');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title="Rathod Pratik" mode={mode} btn={Text} togglemode={togglemode}/>
      <div className="my-4 container " >
        <TextForm title="Enter text to check" mode={mode} />
      </div>
    </>
  );
}

export default App;
