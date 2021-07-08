import React,{useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import RegForm from './components/RegForm/RegForm';
import Menu from './components/Menu/Menu';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import './App.css';

function App() {
 
  return (
  <Router>
   <div>
    
     <NavBar />
     <Switch>
     <Route path="/" exact component={RegForm} />
     <Route path="/Menu" component={Menu} />
     
     </Switch>
     
     </div>
     </Router>
  );
}

export default App;
