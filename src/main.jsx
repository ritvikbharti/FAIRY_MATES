import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Health from './Health.jsx'
import DiseaseExplore from './DiseaseExplore'
import Login from './components/Login/Login.jsx'


import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    {/* <Health/> */}
    <App />
    {/* <DiseaseExplore/> */}
  {/* <Login/> */}
  </React.StrictMode>,
)
