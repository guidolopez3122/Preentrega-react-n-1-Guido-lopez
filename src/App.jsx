import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'


function App() {

  return (
  <div>
    <BrowserRouter>
    <NavBar />

    <Routes>
      <Route path="/" element={<ItemListContainer saludo={"Bienvenidos a la tienda online"} />}/>
      <Route path="/categoria/:idCategoria" element={<ItemListContainer saludo={"Bienvenidos a la tienda online"} />} />
      <Route path="/detalle/:idProducto" element={<ItemDetailContainer/>} />
    </Routes>
    
    </BrowserRouter>
  </div>
  )
}

export default App



    //<ItemDetailContainer />