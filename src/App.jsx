import './App.css'
import React, { useState } from 'react';

function App() {
 //Aquí tu código
  const [name, setName] = useState("Sofía");
  const [newName, setNewName] = useState("");

  return (
    <div>
      <h1>Nombre de profesor: {name}</h1>
      
      <ul>
        <li onClick={() => setName("Data")}>Data</li>
        <li onClick={() => setName("Reyes")}>Reyes</li>
        <li onClick={() => setName("Yolanda")}>Yolanda</li>
      </ul>

      <input
        type='text'
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Ingresa el nuevo nombre"
      />
      <button onClick={() => {
        setName(newName);
        setNewName('');
      }}>
        Actualizar Nombre
      </button>
    </div>
  )
}

export default App;
