import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import iconCart from "../../assets/carrito.png"
import "../navBar/CartWidget.css"

const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)

    const quantity = totalQuantity()

    return (
        <Link to="/cart" className="cartContainer">
        <img className="carrito" src={iconCart} alt="carrito" />
        <p className="numeroCarrito">{quantity >= 1 && quantity}</p> 
        </Link>
        
    )
}
export default CartWidget