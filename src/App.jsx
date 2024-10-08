import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'


function App() {

  return (
  <div>
    <NavBar />
    <ItemListContainer saludo={"bienvenidos a la tienda online"} />
  </div>
  )
}

export default App
