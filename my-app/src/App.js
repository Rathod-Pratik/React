import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
  return (
    <>
  <Navbar title="Rathod Pratik" find='search'/>
  {/* <Navbar  /> */}
<div className="my-4 container ">
<TextForm title="Enter text to check"/>
</div>
  </>
  );
}

export default App;
