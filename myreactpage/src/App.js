import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
  setAlert(
    {
      msg:message,
      type:type
    }
         )
         setTimeout(() => {
          setAlert(null)
        }, 3000);
}

  const toggleMode =()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#0F1111';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }

  }
  return (
    <>
    <Router>
<Navbar title="CGI" aboutus="About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/">
            <TextForms head="Welcome to Text Converter" mode={mode}/>
          </Route>
        </Switch>
      </Router>
      </>
  );
}

export default App;
