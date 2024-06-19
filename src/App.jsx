import './App.css'
import {useState} from 'react'

function App() {
 //Aquí tu código
 const [name, setName] = useState('Sofía')
 const [newName, setNewName] = useState('')

const changeName = (event) => {
    event.preventDefault()
    if (newName !== '') {
        setName(newName)
        setNewName('')
    }
}

return (
    <div>
        <h2>Teacher Name: {name}</h2>
        <form onSubmit={changeName}>
            <input type='text' value={newName} placeholder='Add a new name' onChange={(e) => setNewName(e.target.value)}></input>
            <button type='submit'>Add</button>
        </form> 
    </div>
)
}

export default App

{/* <ul>
            <li><button onClick={() => changeName('Data')}>Data</button></li>
            <li><button onClick={() => changeName('Reyes')}>Reyes</button></li>
            <li><button onClick={() => changeName('Yolanda')}>Yolanda</button></li>
        </ul> */}
