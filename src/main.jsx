import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function teacheName(){
  const[name, setName]= useState("Sofia");
  const[newName, setNewName]= useState("");
  const predefinedNames = ['Data', 'Reyes', 'Yolanda'];
  
  return(
    <div>
      <h2>Teacher Name: {name}</h2>
      type="text" 
        value={newName} 
        onChange={(e) => setNewName(e.target.value)} 
        placeholder="Ingresa el nuevo nombre"
      
      <button onClick={() => setName(newName)}>Actualizar Nombre</button>
      <ul>
        {predefinedNames.map((predefinedName, index) => (
          <li key={index} onClick={() => setName(predefinedName)}>
            {predefinedName}
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export default teacheName;
