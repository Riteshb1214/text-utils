import './App.css';
import {useState} from "react";
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (<>
  {/* <Router> */}
  <Navbar title = "Text Utils" toggleMode = {toggleMode} mode = {mode} about = "About TextUtils"/>
  <div className="container">
    <Textform mode = {mode} heading = "Enter the text to analyze" />
    {/* <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/">
      <Textform mode = {mode} heading = "Enter the text to analyze" />
      </Route>
    </Switch> */}
    {/* <About/> */}
  </div>
  {/* </Router> */}
  </>);
}

export default App;
