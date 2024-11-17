import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { ToastContainer} from 'react-toastify';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
  <div>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
          <ToastContainer theme="dark"/>

          <Routes>
            <Route path="/" element={<ItemListContainer saludo={"Bienvenidos a la tienda online"} />}/>
            <Route path="/categoria/:idCategoria" element={<ItemListContainer saludo={"Bienvenidos a la tienda online"} />} />
            <Route path="/detalle/:idProducto" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
    
      </CartProvider>
    </BrowserRouter>
  </div>
  )
}

export default App



    //<ItemDetailContainer />