import "./App.css";
import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import { useState } from "react";
function App() {
  const [mode, setmode] = useState('light');
  const [Text, setText] = useState('Dark');
  const [alert,setalert]=useState();
  const showAlert=(type ,message)=>{
    setalert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    },2500);
  }
  function togglemode() {
    if(mode==='light'){
      setmode('dark');
      setText('Light');
      document.body.style.backgroundColor='#1f3b51';
      showAlert('success',' successfully turn on dark mode')
      document.title='Rathod Pratik - Home Dark mode'
    }
    else{
      setmode('light');
      setText('Dark');
      document.body.style.backgroundColor='white';
      showAlert('success',' successfully turn on light mode')
      document.title='Rathod Pratik - Home Light mode'
    }
  }
  return (
    <>
      <Navbar title="Rathod Pratik" mode={mode} btn={Text} togglemode={togglemode}/>
      {alert && <Alert type={alert.type} message={alert.message} />}
      <div className="my-4 container " >
        <TextForm title="Enter text to check" mode={mode} />
      </div>
    </>
  );
}

export default App;
