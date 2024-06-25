import './App.css';
import Navbar from './component/Navbar';
import Text_editor from './Text editor';

function App() {
  return (
    <>
  <Navbar title="Rathod Pratik" find='search'/>
  {/* <Navbar  /> */}
<div className="my-4 container ">
<Text_editor title="Enter text to check"/>
</div>
  </>
  );
}

export default App;
