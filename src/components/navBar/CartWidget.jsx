import iconCart from "../../assets/carrito.png"
import "../navBar/CartWidget.css"
const CartWidget = () => {
    return (
        <div className="cartContainer">
        <img className="carrito" src={iconCart} alt="carrito" />
        <p className="numeroCarrito">1</p> 
        </div>
        
    )
}
export default CartWidget