import './App.css'

function App() {
 //Aquí tu código
const[name, setName]= useState("Sofia");
const[newName,setNewName]= useState("");


return(
    <div>
<h1>Nombre de profesor:{name}</h1>
<input
type='text'
value={newName}
onChange={(e)=> setNewName(e,target)}
placeholder="Ingresa el nuevo nombre"
/>
<button onClick={() => setName(newName)}>Actualizar Nombre</button>
    </div>
)

}

export default App
