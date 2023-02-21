import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); //whether dark  ode is enabled or not
  const [alert , setAlert] = useState(null);

  const showAlert =(message , type) => {

    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
    }

  const toggleMode =() =>{
    if(mode === 'light'){

      setMode ('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark Mode has been enabled" ,"success");
    }
  
  else{
    setMode ('light');
    document.body.style.backgroundColor= 'white';
    showAlert("Light Mode has been enabled", "success");
  }
  }
  return (
   <>
   {/* <Navbar title='TextUtils' aboutText="About TextUtils"/> */}
   {/* <Navbar/> */}
   <Router>
   <Navbar title="SEO Tools" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container">
   <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm heading="" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>

   </div>
   </Router>
   </>

  );
}

export default App;
