import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"; 
import Home from './compo/Home';
import Update from './compo/Update';
import Create from './compo/Create';
function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/update/:id' element={<Update/>}/>
        </Routes>
      </Router>
  )
}

export default App