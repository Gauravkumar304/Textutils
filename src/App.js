import React, { useState } from 'react';

import './App.css';
//import More from './componenets/More';
import Navbar from './componenets/Navbar';
import Textform from './componenets/Textform';
import About from './componenets/About';
import Alert from './componenets/Alert';


import {   
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";


function App() {
  const [mode,setMode ] = useState('light');  //whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()  =>{
      setAlert(null);
    } ,1500)
  }
  const toggleMode =()=> {
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor ='#142e4e';
    showAlert("dark mode has been enabled","success");
    document.title ='TextUtils-Dark mode';         // change the title
    // setInterval(() =>{
    //   document .title ='TextUtils-Dark mode';         // change the title 
    // },2000);

    // setInterval(() =>{
    //   document .title ='install TextUtils';         // change the title 
    // },1500);                 //keep chnaginng title
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("light mode has been enabled","success");
      document.title ='TextUtils-light mode';  // change the title 
    }
  }
  return (
  <>
  <Router>
  <Navbar title="TextUtils"  about="About us"   mode={mode}   toggleMode={toggleMode}/>
  <Alert  alert={alert}/>
  <div className="container my-3" >
  <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          {/* /user -->componenet 1
          /user/home -->-->coponents 2 */}

           <Route exact path="/">  {/*exact used for exact match the path  */}
          <Textform showAlert={showAlert} heading="enter the text analyze"  mode={mode}/>
          </Route>
        </Switch>
  
  {/* <More/>               my more is about .js */}
  </div>
  </Router>
 </>
  );
}

export default App;
