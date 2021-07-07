import React,{useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import RegForm from './components/RegForm/RegForm';

import './App.css';

function App() {
  const [heading,setHeading] = useState('Register card form')
  return (
   <div>
    
     <NavBar heading={heading} />
     <RegForm />
    
     
     </div>
  );
}

export default App;
