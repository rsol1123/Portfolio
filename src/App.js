import React from 'react';
import './App.css';
import{
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './contents/Home';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import About from './contents/About';
import Experience from './contents/Experience';

function App() {
  return(
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/experience">
            <Experience/>
        </Route>
      </div>
    </Router>
  )

}

export default App;
