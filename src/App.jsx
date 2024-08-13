import { useState } from 'react'
import './App.css'
import AppBars from './components/AppBar/AppBars.jsx'
import LandingPAge from './components/Home/LandingPage/LandingPAge'
import Disease from './components/Home/Disease/Disease'
import CommonIssues from './components/Home/CommonIssues/CommonIssues'
import Doctors from './components/Home/Doctors/Doctors'
import { BrowserRouter  as Router} from 'react-router-dom';
function App() {


  return < Router >

    <AppBars/>
    <LandingPAge/>
    <Disease/>
    <CommonIssues/>
    <Doctors/>
    </Router>;
   
   
    
    

  
      
    
  
}

export default App
